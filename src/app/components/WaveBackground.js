"use client";
import { useRef, useEffect } from "react";

export default function WaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = 300;

    let t = 0;

    function drawWave(offset, color, amp) {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = color;

      for (let x = 0; x < canvas.width; x++) {
        const y =
          canvas.height / 2 +
          Math.sin(x * 0.01 + t + offset) * amp;

        ctx.lineTo(x, y);
      }

      ctx.stroke();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawWave(0, "#01B1C6", 30);
      drawWave(2, "#12B26F", 40);
      drawWave(4, "#6EE7F9", 20);

      t += 0.02;

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "300px",
      }}
    />
  );
}