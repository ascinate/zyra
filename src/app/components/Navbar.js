import React from "react";
import Image from "next/image";
import { MdArrowOutward, MdOutlineLightMode } from "react-icons/md";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

function Navications() {
    const menuItems = [
        { name: "Home", link: "#" },
        { name: "About", link: "#" },
        { name: "Help", link: "#" }
    ];
    return (
        <>
            <section className="float-start w-100 top-sections015">
                <div className="text-rat01 tops-1">
                    <p className="text-center mb-0"> AI can now use Zyra Capital to transact, trade, and build apps on their own. </p>
                </div>
            </section>
            <section className="float-start w-100 main-nav">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-2">
                            <a className="navbar-brand" href="/">
                                <Image
                                    src="/logo.svg"
                                    alt="Next.js logo"
                                    width={103}
                                    height={39}
                                    priority
                                />
                            </a>
                        </div>

                        <nav className="navbar col-lg-6 navbar-expand-lg navbar-light">


                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                                    {menuItems.map((item, index) => (
                                        <li className="nav-item" key={index}>
                                            <a className="nav-link" href={item.link}>
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                        </nav>
                        <div className="rights-menus-2 col-lg-4">
                            <ul className="d-flex mb-0 align-items-center ms-auto justify-content-end">
                                <li>
                                    <Link href="/" className="btn eng-btn me-3"> <Image
                                        src="/en.png"
                                        alt="lang"
                                        width={26}
                                        height={18}
                                        priority
                                    />  English  <IoIosArrowDown /> </Link>
                                </li>
                                <li>
                                    <Link href="/" className="btn signup-btn">  Signup <MdArrowOutward /> </Link>
                                </li>
                                <li>
                                    <Link href="/" className="btn login-btn mx-3"> Login <MdArrowOutward /> </Link>
                                </li>
                                <li>
                                    <Link href="/" className="btn round-lins"> <MdOutlineLightMode /> </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
export default Navications;