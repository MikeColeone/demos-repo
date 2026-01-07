<script setup lang="ts">
import { ref, onMounted } from 'vue';
// @ts-ignore
import { useEcharts } from '../composables/useEcharts';

// 用 Web Worker 生成十万点（替换成真实接口即可）
const worker = new Worker(new URL('../workers/bigData.worker.ts', import.meta.url), { type: 'module' });

const loading = ref(true);
const points = 100_000;
const { domRef, setOption } = useEcharts();

onMounted(() => {
    worker.postMessage({
        points,
        startTime: Date.now() - points * 60_000, // 每分钟一个点
        stepMs: 60_000,
        noise: 8,
    });

    worker.onmessage = (e: MessageEvent<{ data: [number, number][] }>) => {
        const seriesData = e.data.data;

        setOption({
            animation: false,
            tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
            grid: { left: 40, right: 20, top: 30, bottom: 60 },
            xAxis: {
                type: 'time',
                boundaryGap: false,
                axisLabel: { hideOverlap: true },
            },
            yAxis: { type: 'value', scale: true },
            dataZoom: [
                // 滑块：限制首屏显示窗口与最大跨度
                {
                    type: 'slider',
                    xAxisIndex: 0,
                    start: 0, // 首屏从 0%
                    end: 1, // 到 1%（十万点 => 1000 点左右）
                    minSpan: 1, // 最小 1%
                    maxSpan: 10, // 最大 10% 视窗，避免一次性渲染过多
                    height: 24,
                },
                // 内置缩放（拖拽/滚轮）
                { type: 'inside', xAxisIndex: 0, minSpan: 1, maxSpan: 10 },
            ],
            series: [
                {
                    type: 'line',
                    showSymbol: false, // 海量点务必关掉圆点
                    sampling: undefined, // 方案 A 强调分段渲染，不做降采样
                    smooth: false,
                    large: true, // 开启大数据优化（line 支持）
                    largeThreshold: 2000,
                    progressive: 10_000, // 分批绘制，避免一次性阻塞
                    progressiveThreshold: 50_000,
                    lineStyle: { width: 1 },
                    data: seriesData,
                },
            ],
        });

        loading.value = false;
    };
});
</script>

<template>
    <div class="card">
        <div class="title">方案 A：dataZoom 分段渲染（首屏 1%~10%）</div>
        <div v-if="loading" class="loading">数据生成中...</div>
        <div ref="domRef" class="chart"></div>
        <div class="tips">✅ 首屏只绘制少量点，拖动滑块/滚轮逐段查看；避免一次绘制十万点导致卡顿。</div>
    </div>
</template>

<style scoped>
.card {
    padding: 12px;
}
.title {
    font-weight: 600;
    margin-bottom: 8px;
}
.chart {
    width: 100%;
    height: 420px;
}
.loading {
    padding: 8px 0;
    opacity: 0.8;
}
.tips {
    margin-top: 8px;
    font-size: 12px;
    opacity: 0.7;
}
</style>
