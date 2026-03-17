"use client";
import { useRef, useEffect } from "react";

export default function HoverCanvas() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 400;
    canvas.height = 250;

    const particles = [];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 2 + 1,
        size: Math.random() * 2 + 1
      });
    }

    function animate() {

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(0,200,255,0.8)";

      particles.forEach(p => {

        p.x -= p.speed;

        if (p.x < 0) {
          p.x = canvas.width;
          p.y = Math.random() * canvas.height;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

      });

      requestAnimationFrame(animate);

    }

    animate();

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hover-canvas"
    />
  );
}