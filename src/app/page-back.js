"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navications from "./components/Navbar";
import Banner from "./components/Banner";
import LogoSlider from "./components/LogoSlider";
import { useRef, useState } from "react";
import WaveBackground from "./components/WaveBackground";


export default function Home() {
    const [hover, setHover] = useState(false);
    const handleEnter = () => {
        canvasRef.current.startAnimation();
    };

    const handleLeave = () => {
        canvasRef.current.stopAnimation();
    };

    const containerRef = useRef(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();

        setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };


    return (
        <div className="float-start w-100">
            <Navications />
            <main className="float-start w-100">
                <Banner />
                <section className="float-start w-100 clicnts-logo">
                    <div className="container">
                        <LogoSlider />
                    </div>
                </section>

                <section className="card-sectons float-start w-100 baner-cards">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-3 gy-4">
                            <div className="col">
                                <div className="d-block card-new text-center">
                                    <div className="position-relative">
                                        <div className="canvas-bg">
                                            <Image
                                                src="/Artificial-intelligence-removebg-preview.png"
                                                alt="Next.js logo"
                                                width={500}
                                                height={500}
                                                priority
                                                className="nora-img"
                                            />
                                            <Image
                                                src="/output-onlinegiftools2.gif"
                                                alt="Next.js logo"
                                                width={500}
                                                height={500}
                                                priority
                                                className="hover-imgs"
                                            />


                                        </div>
                                    </div>
                                    <h4> Autonomous AI Strategy Routing </h4>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-block card-new text-center"
                                >
                                    <div className="position-relative">
                                        <div className="canvas-bg">
                                            <Image
                                                src="/stesp234.png"
                                                alt="Next.js logo"
                                                width={500}
                                                height={500}
                                                priority
                                                className="nora-img"
                                            />
                                            <Image
                                                src="/stesp23.gif"
                                                alt="Next.js logo"
                                                width={500}
                                                height={500}
                                                priority
                                                className="hover-imgs"
                                            />


                                        </div>
                                    </div>
                                    <h4> Multi-Exchange Opportunity Detection </h4>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-block card-new text-center"
                                >
                                    <div className="position-relative">
                                        <div className="canvas-bg">
                                            <Image
                                                src="/ai-tools015.png"
                                                alt="Next.js logo"
                                                width={500}
                                                height={500}
                                                priority
                                                className="nora-img"
                                            />
                                            <Image
                                                src="/ai-last.gif"
                                                alt="Next.js logo"
                                                width={500}
                                                height={500}
                                                priority
                                                className="hover-imgs"
                                            />


                                        </div>
                                    </div>
                                    <h4> Real-Time Capital
                                        Deployment </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="float-start position-relative w-100 capitals-div01">
                    <div className="container">
                        <h2 className="text-center"> Why Capital Chooses <br /> Zyra Capital </h2>
                        <div className="row top-mains01 stretch">
                            <div className="col-lg-4 min-height01">
                                <div className="crad-text left-aro01">
                                    <h4> Reinforcement <br /> Learning Models </h4>
                                </div>
                                <div className="crad-text left-aro01 end-bootms">
                                    <h4> 50+ Exchange <br /> Connectivity </h4>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div
                                    ref={containerRef}
                                    className="middle-iamgs"
                                    onMouseMove={handleMove}
                                    style={{
                                        "--x": `${pos.x}px`,
                                        "--y": `${pos.y}px`,
                                    }}
                                >
                                    {/* grayscale image */}
                                    <Image
                                        src="/1st1.png"
                                        alt="image"
                                        fill
                                        className="img-gray"
                                    />

                                    {/* color image */}
                                    <Image
                                        src="/2nd2.png"
                                        alt="image"
                                        fill
                                        className="img-color"
                                    />
                                </div>
                                <div className="crad-text text-center bottoms-aro01">
                                    <h4> Sub-10µs <br /> execution  </h4>
                                </div>
                            </div>
                            <div className="col-lg-4 min-height01">
                                <div className="crad-text right-aro01">
                                    <h4> 24/7 Autonomous  <br /> Agents </h4>
                                </div>
                                <div className="crad-text right-aro01 end-bootms">
                                    <h4> 1.8M+ Trades
                                        <br /> Executed </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-names-bg015">

                        <Image
                            src="/bg-darks01.gif"
                            alt="Next.js logo"
                            width={1152}
                            height={664}
                            className="bg-rounds"
                        />

                    </div>
                </section>

            </main>

        </div>
    );
}
