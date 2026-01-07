import React, { useEffect, useState, useRef } from 'react';
import ReactECharts from 'echarts-for-react';

type SamplingType = 'average' | 'max' | 'min' | 'sum' | null;

const BigDataChart = () => {
  const [data, setData] = useState<number[][]>([]);
  const [timings, setTimings] = useState<Record<string, number>>({});
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const points = 1000; // 可调
    const tempData: number[][] = [];
    for (let i = 0; i < points; i++) {
      tempData.push([i, Math.random() * 100]);
    }
    setData(tempData);
  }, []);

  const getOption = (withZoom = true, sampling: SamplingType = null) => ({
    xAxis: { type: 'category' },
    yAxis: { type: 'value' },
    dataZoom: withZoom ? [{ type: 'inside' }, { type: 'slider' }] : [],
    series: [
      {
        type: 'line',
        data,
        sampling,
        showSymbol: false,
        smooth: false,
      }
    ]
  });

  const testRenderTime = (withZoom: boolean, sampling: SamplingType) => {
    const instance = chartRef.current.getEchartsInstance();
    const key = `${withZoom ? 'zoom' : 'noZoom'}-${sampling || 'none'}`;
    const start = performance.now();

    const onFinished = () => {
      const end = performance.now();
      setTimings(prev => ({ ...prev, [key]: parseFloat((end - start).toFixed(2)) }));
      instance.off('finished', onFinished);
    };

    instance.on('finished', onFinished);
    instance.setOption(getOption(withZoom, sampling));
  };

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button onClick={() => testRenderTime(false, null)}>无 dataZoom</button>
        <button onClick={() => testRenderTime(true, null)}>有 dataZoom</button>
        <button onClick={() => testRenderTime(true, 'average')}>有 dataZoom + average</button>
        <button onClick={() => testRenderTime(true, 'max')}>有 dataZoom + max</button>
        <button onClick={() => testRenderTime(true, 'min')}>有 dataZoom + min</button>
        <button onClick={() => testRenderTime(true, 'sum')}>有 dataZoom + sum</button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <h3>渲染耗时对比（ms）</h3>
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <th>模式</th>
              <th>耗时 (ms)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(timings).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ReactECharts
        ref={chartRef}
        option={getOption(true, null)}
        style={{ height: '600px', width: '100%' }}
        notMerge={true}
      />
    </div>
  );
};

export default BigDataChart;
