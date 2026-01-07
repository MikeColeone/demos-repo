import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
    GridComponent,
    TooltipComponent,
    DataZoomComponent,
    DatasetComponent,
    LegendComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
    LineChart,
    GridComponent,
    TooltipComponent,
    DataZoomComponent,
    DatasetComponent,
    LegendComponent,
    CanvasRenderer,
]);

import { onMounted, onBeforeUnmount, ref } from 'vue';

export function useEcharts() {
    const domRef = ref<HTMLDivElement | null>(null);
    let chart: echarts.ECharts | null = null;

    const init = () => {
        if (!domRef.value) return;
        chart = echarts.init(domRef.value, undefined, { renderer: 'canvas' });
    };

    const setOption = (option: echarts.EChartsOption) => {
        chart?.setOption(option, { notMerge: true, lazyUpdate: true });
    };

    const resize = () => chart?.resize();

    onMounted(() => {
        init();
        window.addEventListener('resize', resize);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', resize);
        chart?.dispose();
        chart = null;
    });

    return { domRef, setOption };
}
