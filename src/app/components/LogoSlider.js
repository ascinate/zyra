"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";




var settings = {
    dots: true,
    infinite: true,
    loop: true,
    autoplay: true,
    margin: 20,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                dots: true,
                margin: 20,
                loop: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                loop: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 668,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 1,
                infinite: true,
                dots: true,
                loop: true,
                autoplay: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
};
function LogoSlider() {
    const iconcatgegory = [
        { id: 1, img: '/logo1.png' },
        { id: 2, img: '/logo2.png' },
        { id: 3, img: '/logo3.png' },
        { id: 4, img: '/logo1.png' },
        { id: 5, img: '/logo5.png' },
        { id: 6, img: '/logo6.png' },
        { id: 7, img: '/logo1.png' },
        { id: 8, img: '/logo2.png' },
        { id: 9, img: '/logo3.png' },
    ];
    return (
        <>

            <div className="slider-parts mt-4">
                <Slider {...settings}>

                    {iconcatgegory.map((category) => (
                        <div className="items-process1" key={category.id}>
                            <article className="d-block comonins-category01">
                                <figure className="m-0">
                                    <div className="logos-clk">

                                        <Image
                                            src={category.img}
                                            alt="Next.js logo"
                                            width={252}
                                            height={38}
                                            priority
                                        />
                                    </div>
                                </figure>


                            </article>
                        </div>
                    ))}

                </Slider>
            </div>

        </>
    );
}
export default LogoSlider;