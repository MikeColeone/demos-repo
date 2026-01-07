import * as echarts from 'echarts/core';

const GanttView = echarts.ChartView.extend({
  type: 'gantt',

  render(seriesModel, ecModel, api) {
    const group = this.group;
    group.removeAll();

    const data = seriesModel.getData();
    const coordSys = seriesModel.coordinateSystem;

    data.each(function (idx) {
      const start = data.get('start', idx);
      const end = data.get('end', idx);
      const y = data.get('y', idx);
      const taskName = data.get('name', idx);
      const progress = data.get('progress', idx);

      const startPoint = coordSys.dataToPoint([start, y]);
      const endPoint = coordSys.dataToPoint([end, y]);

      const rectWidth = endPoint[0] - startPoint[0];
      const rectShape = {
        x: startPoint[0],
        y: startPoint[1] - seriesModel.get('barHeight') / 2,
        width: rectWidth,
        height: seriesModel.get('barHeight')
      };

      // 主任务条
      const bar = new echarts.graphic.Rect({
        shape: rectShape,
        style: seriesModel.getModel('itemStyle').getItemStyle()
      });
      group.add(bar);

      // 进度条
      if (progress != null) {
        group.add(new echarts.graphic.Rect({
          shape: {
            ...rectShape,
            width: rectShape.width * progress
          },
          style: {
            fill: '#91cc75'
          }
        }));
      }

      // 标签
      if (seriesModel.get(['label', 'show'])) {
        group.add(new echarts.graphic.Text({
          style: {
            text: taskName,
            x: rectShape.x + rectShape.width / 2,
            y: rectShape.y + rectShape.height / 2,
            textAlign: 'center',
            textVerticalAlign: 'middle',
            fill: seriesModel.get(['label', 'color'])
          }
        }));
      }
    });
  }
});

export default GanttView;
