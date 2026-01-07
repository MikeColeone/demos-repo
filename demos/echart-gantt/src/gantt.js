import { use } from 'echarts/core';
import GanttSeries from './ganttSeries';
import GanttView from './ganttView';

export function installGanttChart() {
  use([GanttSeries, GanttView]);
}
