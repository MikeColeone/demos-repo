// 十万级时间序列数据生成器（或对真实数据做简要聚合预处理）
export type GenPayload = {
    points: number;       // 生成点数
    startTime: number;    // 起始时间戳(ms)
    stepMs: number;       // 时间步长(ms)
    noise?: number;       // 随机噪声幅度
};

self.onmessage = (e: MessageEvent<GenPayload>) => {
    const { points, startTime, stepMs, noise = 5 } = e.data;

    const data: [number, number][] = new Array(points);
    let v = 100;

    for (let i = 0; i < points; i++) {
        // 模拟随机游走，叠加一点噪声，制造可视化趋势
        v += (Math.random() - 0.5) * noise;
        data[i] = [startTime + i * stepMs, +v.toFixed(2)];
    }

    // 也可以在这里做首轮聚合（如每 N 点取平均/极值），减服务端/网络/前端压力
    postMessage({ data });
};
