import * as echarts from 'echarts/core';

const GanttSeries = echarts.SeriesModel.extend({
  type: 'series.gantt',
  dependencies: ['grid'],
  defaultOption: {
    coordinateSystem: 'cartesian2d',
    xAxisIndex: 0,
    yAxisIndex: 0,
    barHeight: 20,
    itemStyle: {
      color: '#5470c6'
    },
    label: {
      show: true,
      position: 'inside',
      color: '#fff'
    },
    progress: null // 进度条支持
  }
});

export default GanttSeries;
