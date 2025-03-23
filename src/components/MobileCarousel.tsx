import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// @ts-expect-error: Swiper CSS types are missing in some environments.
import 'swiper/css';
// @ts-expect-error: Swiper pagination CSS lacks TypeScript definitions.
import 'swiper/css/pagination';



const videos = {
    passenger: [
        { id: "p1", src: "/vids/Passenger Alpha.bc06b347f5b526ad9a60.mp4", text: "Smooth & Comfortable Ride" },
        { id: "p2", src: "/vids/p2.mp4", text: "Efficient Fuel Consumption" },
        { id: "p3", src: "/vids/p3.mp4", text: "Advanced Safety Features" },
    ],
    commercial: [
        { id: "c1", src: "/vids/c1.mp4", text: "High Load Capacity" },
        { id: "c2", src: "/vids/c2.mp4", text: "Reliable for Long Journeys" },
        { id: "c3", src: "/vids/c3.mp4", text: "Durable & Powerful Engine" },
    ],
};

const MobileCarousel = () => {
    return (
        <div className="block lg:hidden bg-black min-h-screen pt-16">
            {/* Main Heading */}
            <h1 className="text-3xl font-thin text-white text-center mt-2 mb-6">Evolving the <span className="font-semibold">drive</span> with 360 solutions.</h1>

            {/* Passenger Section */}
            <div className="h-[40%] text-center">
                <h2 className="text-xl font-thin text-blue-400 mb-2">Passenger Vehicles</h2>
                <p className="text-xs font-thin text-white">Revving up innovation from interior to exterior.</p>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={16}
                    slidesPerView={1}
                    className="h-full"
                >
                    {videos.passenger.map((video) => (
                        <SwiperSlide key={video.id}>
                            <div className="flex flex-col items-center justify-center h-full px-4">
                                <video
                                    key={video.src}
                                    autoPlay
                                    muted
                                    playsInline
                                    className="w-full h-ful h-[25vh] rounded-lg"
                                >
                                    <source src={video.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p className="text-white font-thin text-sm mt-2 mb-12">{video.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Commercial Section */}
            <div className="h-[40%] mt-12 text-center">
                <h2 className="text-xl font-thin text-blue-400 mb-2">Commercial Vehicles</h2>
                <p className="text-xs font-thin text-white">Revving up innovation from interior to exterior.</p>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={16}
                    slidesPerView={1}
                    className="h-full"
                >
                    {videos.commercial.map((video) => (
                        <SwiperSlide key={video.id}>
                            <div className="flex flex-col items-center justify-center h-full px-4">
                                <video
                                    key={video.src}
                                    autoPlay
                                    muted
                                    playsInline
                                    className="w-full h-ful h-[25vh] rounded-lg"
                                >
                                    <source src={video.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p className="text-white font-thin text-sm mt-2 mb-12">{video.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* Custom Styles */}
            
            <div>
    <style>
        {`
        .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: white;
            opacity: 0.6;
            margin: 0 4px;
            transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
            background: blue;
            opacity: 1;
            width: 20px;
            height: 8px;
            border-radius: 4px;
        }
        `}
    </style>
</div>

        </div>
    );
};

export default MobileCarousel;
