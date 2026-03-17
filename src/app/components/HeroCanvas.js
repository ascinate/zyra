"use client";
import { useEffect, useRef } from "react";

export default function HeroCanvas() {
    const canvasRef = useRef(null);

    const icons = [
        "/icon2-mains.png",
        "/icon2.png",
        "/icon3.png",
        "icon4.png",
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = 500;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const images = icons.map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        });

        const radius = 150;
        let angle = 0;

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // center card
            ctx.fillStyle = "#0f172a";
            ctx.fillRect(centerX - 60, centerY - 60, 120, 120);

            images.forEach((img, i) => {
                const a = angle + (i * Math.PI * 2) / images.length;

                const x = centerX + radius * Math.cos(a);
                const y = centerY + radius * Math.sin(a);

                ctx.drawImage(img, x - 20, y - 20, 40, 40);
            });

            angle += 0.01;

            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-[500px]"
        />
    );
}