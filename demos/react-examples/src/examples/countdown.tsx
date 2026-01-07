import React, { useState, useEffect } from 'react';

type CountdownProps = {
  initialSeconds: number; // 初始秒数
};

const Countdown = ({ initialSeconds }:CountdownProps) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return; // 倒计时结束，不再计时

    const timer = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);

    // 清理定时器，防止内存泄漏
    return () => clearTimeout(timer);
  }, [seconds]);

  return (
    <div>
      <h2>倒计时：{seconds} 秒</h2>
    </div>
  );
};

export default Countdown;
