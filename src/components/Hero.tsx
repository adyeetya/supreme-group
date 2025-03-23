
const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/vids/automotive.224e7418884105595114.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video (optional) */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white">
      <span className=" font-light pt-2 pb-3  text-lg  xl:text-xl 2xl:text-[1.375rem] text-white block leading-snug">Driven by performance</span>
      <h2 className="text-xl  xl:text-3xl 2xl:text-4xl text-white font-light leading-tight pb-2 "><span className="font-semibold">Soft trims and <span className="text-blue-400">NVH solutions</span></span> <br className="hidden md:block" /> for seamless rides</h2>
         </div>
    </section>
  );
};

export default Hero;