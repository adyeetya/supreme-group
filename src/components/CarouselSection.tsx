import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type TabType = "passenger" | "commercial";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

interface VideoState {
    activeVideo: string;
    isPlaying: boolean;
    progress: number;
}

const SecondSection = () => {
    const [activeTab, setActiveTab] = useState<TabType>("passenger");
    const [videoStates, setVideoStates] = useState<Record<TabType, VideoState>>({
        passenger: {
            activeVideo: "/vids/Passenger Alpha.bc06b347f5b526ad9a60.mp4",
            isPlaying: true,
            progress: 0,
        },
        commercial: {
            activeVideo: "/vids/c1.mp4",
            isPlaying: true,
            progress: 0,
        },
    });

    const sectionRef = useRef<HTMLDivElement>(null);
    const passengerContentRef = useRef<HTMLDivElement>(null);
    const commercialContentRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<Record<TabType, HTMLVideoElement | null>>({
        passenger: null,
        commercial: null,
    });

    const videos = {
        passenger: [
            { id: "p1", src: "/vids/Passenger Alpha.bc06b347f5b526ad9a60.mp4", thumbnail: "/passenger1.png" },
            { id: "p2", src: "/vids/p2.mp4", thumbnail: "/p2.png" },
            { id: "p3", src: "/vids/p3.mp4", thumbnail: "/p3.png" },
        ],
        commercial: [
            { id: "c1", src: "/vids/c1.mp4", thumbnail: "/c1.svg" },
            { id: "c2", src: "/vids/c2.mp4", thumbnail: "/c2.svg" },
            { id: "c3", src: "/vids/c3.mp4", thumbnail: "/c3.svg" },
        ],
    };

    // Handle video play/pause state when tab changes
    useEffect(() => {
        const currentVideo = videoRefs.current[activeTab];
        if (currentVideo) {
            videoStates[activeTab].isPlaying ? currentVideo.play() : currentVideo.pause();
        }
    }, [activeTab, videoStates]);

    // Handle scroll to switch tabs
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const handleScroll = () => {
            const passengerRect = passengerContentRef.current?.getBoundingClientRect();
            const commercialRect = commercialContentRef.current?.getBoundingClientRect();

            if (passengerRect && commercialRect) {
                const scrollPosition = section.scrollTop + section.clientHeight / 2;
                const commercialInView = scrollPosition > commercialRect.top;
                setActiveTab(commercialInView ? "commercial" : "passenger");
            }
        };

        section.addEventListener("scroll", handleScroll);
        return () => section.removeEventListener("scroll", handleScroll);
    }, []);

    // Toggle play/pause for a specific tab
    const togglePlayPause = (tab: TabType) => {
        const video = videoRefs.current[tab];
        if (video) {
            setVideoStates((prev) => ({
                ...prev,
                [tab]: {
                    ...prev[tab],
                    isPlaying: !video.paused,
                },
            }));

            video.paused ? video.play() : video.pause();
        }
    };

    // Update progress for a specific tab
    const updateProgress = (tab: TabType) => {
        const video = videoRefs.current[tab];
        if (video) {
            const progress = (video.currentTime / video.duration) * 100;
            setVideoStates((prev) => ({
                ...prev,
                [tab]: {
                    ...prev[tab],
                    progress,
                },
            }));
        }
    };

    // Change video for a specific tab
    const changeVideo = (tab: TabType, src: string) => {
        setVideoStates((prev) => ({
            ...prev,
            [tab]: {
                ...prev[tab],
                activeVideo: src,
                progress: 0,
                isPlaying: true,
            },
        }));
    };

    return (
        <section
            id="second-section"
            className="h-[calc(100vh)] snap-start snap-always overflow-y-auto bg-black scrollbar-hide"
            ref={sectionRef}
        >
            <div className="min-h-screen flex flex-col">
                {/* Sticky Header with Animation */}
                <motion.h1
                    initial={{ y: "50vh", opacity: 0 }} // Start from the center
                    whileInView={{ y: 0, opacity: 1 }} // Animate to the top when in view
                    transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
                    viewport={{ once: false }} // Run animation every time the element comes into view
                    className="text-white text-3xl font-thin text-center sticky top-12 z-20 py-4"
                >
                    Evolving the drive with 360-degree <br />
                    comprehensive solutions
                </motion.h1>

                <motion.div
                    initial={{ y: 50, opacity: 0 }} // Start slightly below
                    whileInView={{ y: 0, opacity: 1 }} // Animate up when in view
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }} // Delay to start after headline
                    viewport={{ once: false }} // Run animation every time the element comes into view
                    className="flex flex-col lg:flex-row"
                >
                    {/* Left Side - Tabs */}
                    <div className="w-full lg:w-1/2 p-4 lg:p-8 flex flex-col justify-center space-y-4 lg:space-y-6 sticky top-0 h-auto lg:h-screen bg-black z-10">
                        <motion.button
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            viewport={{ amount: 0.1 }}
                            transition={{ delay: 0.2 }}
                            onClick={() => passengerContentRef.current?.scrollIntoView({ behavior: "smooth" })}
                            className="flex items-center space-x-4 focus:outline-none"
                        >
                            <div className={`h-16 lg:h-24 w-1 ${activeTab === "passenger" ? "bg-white" : "bg-gray-800"}`}></div>
                            <div className="flex flex-col justify-start items-start">
                                <span className={`text-xl lg:text-3xl ${activeTab === "passenger" ? "text-white" : "text-gray-500"}`}>
                                    Passenger Vehicles
                                </span>
                                <span className={`text-xs lg:text-sm ${activeTab === "passenger" ? "text-white" : "text-gray-500"}`}>
                                    Revving up innovation for luxury.
                                </span>
                            </div>
                        </motion.button>
                        <motion.button
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            viewport={{ amount: 0.1 }}
                            transition={{ delay: 0.3 }}
                            onClick={() => commercialContentRef.current?.scrollIntoView({ behavior: "smooth" })}
                            className="flex items-center space-x-4 focus:outline-none"
                        >
                            <div className={`h-16 lg:h-24 w-1 ${activeTab === "commercial" ? "bg-white" : "bg-gray-800"}`}></div>
                            <div className="flex flex-col justify-start items-start">
                                <span className={`text-xl lg:text-3xl ${activeTab === "commercial" ? "text-white" : "text-gray-500"}`}>
                                    Commercial Vehicles
                                </span>
                                <span className={`text-xs lg:text-sm ${activeTab === "commercial" ? "text-white" : "text-gray-500"}`}>
                                    Advanced Engineering for heavy duty vehicles.
                                </span>
                            </div>
                        </motion.button>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full lg:w-1/2 overflow-y-auto scrollbar-hide">
                        {/* Passenger Content */}
                        <div ref={passengerContentRef} className="h-screen p-4 lg:p-8 lg:pt-40">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeInUp}
                                viewport={{ amount: 0.1 }}
                                transition={{ delay: 0.4 }}
                                className="mb-4 lg:mb-8"
                            >
                                <video
                                    key={videoStates.passenger.activeVideo}
                                    ref={(el) => {
                                        videoRefs.current.passenger = el;
                                    }}
                                    autoPlay
                                    muted
                                    playsInline
                                    className="w-full h-32 lg:h-64 rounded-lg"
                                    onTimeUpdate={() => updateProgress("passenger")}
                                >
                                    <source src={videoStates.passenger.activeVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </motion.div>
                            <div className="mt-8 flex space-x-4 lg:space-x-6 items-center justify-center">
                                {videos.passenger.map((video) => (
                                    <motion.button
                                        key={video.id}
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={fadeInUp}
                                        viewport={{ amount: 0.1 }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => changeVideo("passenger", video.src)}
                                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden focus:outline-none"
                                    >
                                        <img src={video.thumbnail} alt="Thumbnail" className="w-full h-full object-cover" />
                                    </motion.button>
                                ))}
                                <motion.button
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeInUp}
                                    viewport={{ amount: 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => togglePlayPause("passenger")}
                                    className="w-10 h-10 lg:w-12 lg:h-12 bg-black rounded-full flex items-center justify-center relative"
                                >
                                    <svg
                                        className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {videoStates.passenger.isPlaying ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        ) : (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                            />
                                        )}
                                    </svg>
                                    <svg
                                        className="absolute top-0 left-0 w-10 h-10 lg:w-12 lg:h-12 transform -rotate-90"
                                        viewBox="0 0 32 32"
                                    >
                                        <circle
                                            cx="16"
                                            cy="16"
                                            r="14"
                                            fill="none"
                                            stroke="rgba(255, 255, 255, 0.3)"
                                            strokeWidth="2"
                                        />
                                        <circle
                                            cx="16"
                                            cy="16"
                                            r="14"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeDasharray="88"
                                            strokeDashoffset={88 - (videoStates.passenger.progress * 88) / 100}
                                        />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>

                        {/* Commercial Content */}
                        <div ref={commercialContentRef} className="h-screen p-4 lg:p-8 lg:pt-40">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeInUp}
                                viewport={{ amount: 0.1 }}
                                transition={{ delay: 0.4 }}
                                className="mb-4 lg:mb-8"
                            >
                                <video
                                    key={videoStates.commercial.activeVideo}
                                    ref={(el) => {
                                        videoRefs.current.commercial = el;
                                    }}
                                    autoPlay
                                    muted
                                    playsInline
                                    className="w-full h-32 lg:h-64 rounded-lg"
                                    onTimeUpdate={() => updateProgress("commercial")}
                                >
                                    <source src={videoStates.commercial.activeVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </motion.div>
                            <div className="flex space-x-4 lg:space-x-6 items-center justify-center mt-8">
                                {videos.commercial.map((video) => (
                                    <motion.button
                                        key={video.id}
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={fadeInUp}
                                        viewport={{ amount: 0.1 }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => changeVideo("commercial", video.src)}
                                        className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden focus:outline-none"
                                    >
                                        <img src={video.thumbnail} alt="Thumbnail" className="w-full h-full object-cover" />
                                    </motion.button>
                                ))}
                                <motion.button
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeInUp}
                                    viewport={{ amount: 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => togglePlayPause("commercial")}
                                    className="w-10 h-10 lg:w-12 lg:h-12 bg-black rounded-full flex items-center justify-center relative"
                                >
                                    <svg
                                        className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        {videoStates.commercial.isPlaying ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        ) : (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                            />
                                        )}
                                    </svg>
                                    <svg
                                        className="absolute top-0 left-0 w-10 h-10 lg:w-12 lg:h-12 transform -rotate-90"
                                        viewBox="0 0 32 32"
                                    >
                                        <circle
                                            cx="16"
                                            cy="16"
                                            r="14"
                                            fill="none"
                                            stroke="rgba(255, 255, 255, 0.3)"
                                            strokeWidth="2"
                                        />
                                        <circle
                                            cx="16"
                                            cy="16"
                                            r="14"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeDasharray="88"
                                            strokeDashoffset={88 - (videoStates.commercial.progress * 88) / 100}
                                        />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SecondSection;