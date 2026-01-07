import React, { useRef, useEffect, useState } from "react";

export interface RowData {
  id: number;
  name: string;
  age: number;
}

interface CanvasTableProps {
  data: RowData[];
  rowHeight?: number;
  visibleHeight?: number;
  columnWidths?: number[];
  font?: string;
  buffer?: number; // 预加载行数
}

const CanvasTable: React.FC<CanvasTableProps> = ({
  data,
  rowHeight = 30,
  visibleHeight = 300,
  columnWidths = [50, 150, 50],
  font = "14px Arial",
  buffer = 5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const totalHeight = data.length * rowHeight;
  const visibleRowCount = Math.ceil(visibleHeight / rowHeight);

  const startRow = Math.max(0, Math.floor(scrollTop / rowHeight) - buffer);
  const endRow = Math.min(data.length, startRow + visibleRowCount + buffer * 2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const canvasHeight = (endRow - startRow) * rowHeight;
    const canvasWidth = columnWidths.reduce((a, b) => a + b, 0);

    canvas.height = canvasHeight;
    canvas.width = canvasWidth;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = font;
    ctx.textBaseline = "middle";

    for (let i = startRow; i < endRow; i++) {
      const row = data[i];
      const y = (i - startRow) * rowHeight;

      ctx.strokeRect(0, y, canvas.width, rowHeight);

      let x = 5;
      ctx.fillText(String(row.id), x, y + rowHeight / 2);
      x += columnWidths[0];

      ctx.fillText(row.name, x + 5, y + rowHeight / 2);
      x += columnWidths[1];

      ctx.fillText(String(row.age), x + 5, y + rowHeight / 2);
    }
  }, [scrollTop, data, rowHeight, columnWidths, font, startRow, endRow]);

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div
      ref={containerRef}
      onScroll={onScroll}
      style={{
        height: visibleHeight,
        overflowY: "scroll",
        position: "relative",
        border: "1px solid #ccc",
      }}
    >
      {/* 空 div 用于撑高滚动容器 */}
      <div style={{ height: totalHeight, position: "relative" }}>
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: startRow * rowHeight,
            left: 0,
          }}
        />
      </div>
    </div>
  );
};

export default CanvasTable;
