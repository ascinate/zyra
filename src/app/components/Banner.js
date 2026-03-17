import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";


function Banner() {
    return (
        <>
            <section className="float-start banner-part w-100 banner-sections">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="banners-text01">
                                <h2 className="text-white"> AI <span> Infrastructure </span> for Autonomous Trading </h2>
                                <p className="text-white mt-4"> Deploy capital into autonomous trading agents that detect and execute market inefficiencies
                                    across global exchanges.</p>
                                <div className="d-flex align-items-center mt-5">
                                    <Link href="#" className="btn btn-deploys">Deploy Capital <IoMdArrowForward /> </Link>
                                    <Link href="#" className="btn btn-deploys-2 ms-3">Explore Demo <IoMdArrowForward /> </Link>
                                </div>
                            </div>

                        </div>
                        <div className="col">
                            <div className="gradents01515 position-relative">
                                <Image
                                    src="/output-onlinegiftools.gif"
                                    alt="Next.js logo"
                                    width={495}
                                    height={495}
                                    priority
                                />
                            </div>

                        </div>
                    </div>

                    <p className="text-center mt-5 text-white d-block mx-auto bottoms-text01">50+ Exchanges | 24/7 Agents | 1.8M+ Trades | 99.99% Uptime</p>
                </div>
                <div className="video-bg w-100">
                    <div className="video-bg w-100">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-100 h-100 object-cover"
                        >
                            <source src="/2759479-hd_1280_720_60fps.mp4" type="video/mp4" />
                        </video>
                    </div>

                </div>
            </section>
        </>
    );
};
export default Banner;