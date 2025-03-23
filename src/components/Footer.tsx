const Footer = () => {
    return (
        <section className="bg-gradient-to-b from-white to-blue-100 text-black p-8 md:p-16 md:pb-2">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

                {/* Logo Section */}
                <div className="col-span-1">
                    <img src="/logo.svg" alt="Supreme Group Logo" className="h-12 mb-4" />
                </div>

                <div className="flex col-span-1 flex-row justify-between gap-4 ">
                    {/* Applications Section */}
                    <div className="w-1/2 md:w-full">
                        <h3 className="font-semibold mb-4">APPLICATIONS</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Apparel</a></li>
                            <li><a href="#" className="hover:underline">Automotive</a></li>
                            <li><a href="#" className="hover:underline">Filtration</a></li>
                            <li><a href="#" className="hover:underline">Customised Nonwoven</a></li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div className="w-1/2">
                        <h3 className="font-semibold mb-4">COMPANY</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Who We Are</a></li>
                            <li><a href="#" className="hover:underline">Global Competency</a></li>
                            <li><a href="#" className="hover:underline">Innovation</a></li>
                            <li><a href="#" className="hover:underline">ESG Impact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex col-span-1 flex-row justify-between gap-4">
                    {/* More Section */}
                    <div className="w-1/2">
                        <h3 className="font-semibold mb-4">MORE</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div className="w-1/2">
                        <h3 className="font-semibold mb-4">FOLLOW US</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center">
                <p className="text-sm mb-2">©2024. All Rights Reserved.</p>
                <p className="text-sm">Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</p>
            </div>
        </section>
    );
};

export default Footer;
