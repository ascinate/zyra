"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navications from "./components/Navbar";
import Banner from "./components/Banner";
import LogoSlider from "./components/LogoSlider";
import { useRef, useState } from "react";
import HoverCanvas from "./components/HoverCanvas";

export default function Home() {
  const [hover, setHover] = useState(false);
  const handleEnter = () => {
    canvasRef.current.startAnimation();
  };

  const handleLeave = () => {
    canvasRef.current.stopAnimation();
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
                <div className="d-block card-new text-center"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}>
                  <div className="position-relative">
                    <div className="canvas-bg">
                      <HoverCanvas />
                    </div>
                  </div>
                  <h4> Autonomous AI Strategy Routing </h4>
                </div>
              </div>
              <div className="col">
                <div className="d-block card-new text-center"
                >
                  <div className="videso-sections">
                    <video

                      muted
                      loop
                      playsInline
                      className="w-100 h-100 object-cover"
                    >
                      <source src="/grok-video-7995da82-6d6e-4495-9743-7b82df71653f.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <h4> Multi-Exchange Opportunity Detection </h4>
                </div>
              </div>
              <div className="col">
                <div className="d-block card-new text-center"
                >
                  <div className="videso-sections">
                    <video

                      muted
                      loop
                      playsInline
                      className="w-100 h-100 object-cover"
                    >
                      <source src="/grok-video-7995da82-6d6e-4495-9743-7b82df71653f.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <h4> Real-Time Capital
                    Deployment </h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="float-start w-100 capitals-div01">
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
                <div className="middle-iamgs">
                  <Image
                    src="/1st.png"
                    alt="Next.js logo"
                    width={647}
                    height={1136}
                    priority
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
        </section>
      </main>

    </div>
  );
}
