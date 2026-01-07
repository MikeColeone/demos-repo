<script setup lang="ts">
import { ref, watchEffect, onMounted } from 'vue';
// @ts-ignore
import { useEcharts } from '../composables/useEcharts';

type Sampling = 'lttb' | 'average' | 'min' | 'max' | 'minmax' | 'sum' | undefined;

const worker = new Worker(new URL('../workers/bigData.worker.ts', import.meta.url), { type: 'module' });

const sampling = ref<Sampling>('lttb'); // 默认 LTTB，兼顾趋势与极值
const loading = ref(true);
const raw = ref<[number, number][]>([]);
const { domRef, setOption } = useEcharts();

onMounted(() => {
    worker.postMessage({
        points: 120_000,
        startTime: Date.now() - 120_000 * 60_000,
        stepMs: 60_000,
        noise: 10,
    });

    worker.onmessage = (e: MessageEvent<{ data: [number, number][] }>) => {
        raw.value = e.data.data;
        loading.value = false;
    };
});

watchEffect(() => {
    if (!raw.value.length) return;

    setOption({
        animation: false,
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        // legend: { data: ['原始曲线(仅作参考区段)', '降采样曲线'] },
        legend: {
            data: ['原始曲线(仅作参考区段)', '降采样曲线'],
            top: 0, // 往下偏移，避免和标题/图表重叠
            left: 'center', // 居中显示
            textStyle: {
                fontSize: 12, // 调小字体，避免占太大空间
            },
            icon: 'rect', // 图例样式：小矩形，比较节省空间
            itemWidth: 12, // 图例标记宽度
            itemHeight: 8, // 图例标记高度
        },
        grid: { left: 40, right: 20, top: 30, bottom: 40 },
        xAxis: { type: 'time', boundaryGap: false },
        yAxis: { type: 'value', scale: true },
        dataZoom: [
            // 这里默认全局展示，依靠 sampling 降低绘制量
            { type: 'inside', xAxisIndex: 0 },
            { type: 'slider', xAxisIndex: 0, height: 22 },
        ],
        series: [
            // 仅在小窗口内展示一段“原始曲线”的精细度对比（可选）
            // 你也可以移除该 series，专注降采样后的曲线
            {
                name: '原始曲线(仅作参考区段)',
                type: 'line',
                showSymbol: false,
                sampling: undefined,
                large: true,
                lineStyle: { width: 1, opacity: 0.4 },
                emphasis: { disabled: true },
                data: raw.value.slice(0, 5000), // 只取一小段避免卡顿
                z: 1,
            },
            {
                name: '降采样曲线',
                type: 'line',
                showSymbol: false,
                sampling: sampling.value, // ⭐ 关键：使用 ECharts 内置降采样
                large: true,
                largeThreshold: 2000,
                progressive: 10_000,
                progressiveThreshold: 50_000,
                lineStyle: { width: 1 },
                emphasis: { disabled: true },
                data: raw.value,
                z: 2,
            },
        ],
    });
});
</script>

<template>
    <div class="card">
        <div class="head">
            <div class="title">方案 B：sampling 降采样</div>
            <label class="control">
                <span>采样策略：</span>
                <select v-model="sampling">
                    <option value="lttb">lttb（趋势/形状/极值较好）</option>
                    <option value="minmax">minmax（极值更稳）</option>
                    <option value="average">average</option>
                    <option value="min">min</option>
                    <option value="max">max</option>
                    <option value="sum">sum</option>
                </select>
            </label>
        </div>

        <div v-if="loading" class="loading">数据生成中...</div>
        <div ref="domRef" class="chart"></div>

        <div class="tips">
            ✅ 建议折线图海量点开启 <code>showSymbol: false</code>、<code>large: true</code>、<code>progressive</code>。
            <br />
            ⚠️ 实测 <code>lttb</code> 偶尔会对极值有偏差，若对极值/峰谷敏感，用 <code>minmax</code>。
        </div>
    </div>
</template>

<style scoped>
.card {
    padding: 12px;
}
.head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 8px;
}
.title {
    font-weight: 600;
}
.control {
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
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
