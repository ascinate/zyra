"use client";
import { useRef, useEffect } from "react";

export default function WaveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;

    let stars = [];

    for (let i = 0; i < 40; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.2
      });
    }

    function animate() {

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);

        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.r * 4
        );

        gradient.addColorStop(0, "#01B1C6");
        gradient.addColorStop(1, "#12B26F");

        ctx.fillStyle = gradient;
        ctx.fill();

        star.y -= star.speed;

        if (star.y < 0) {
          star.y = canvas.height;
        }

      });

      requestAnimationFrame(animate);

    }

    animate();

  }, []);

  return <canvas ref={canvasRef} />;
}