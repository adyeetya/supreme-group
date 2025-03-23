import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Dialog } from "@headlessui/react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
 

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Hide navbar when scrolling down past 50px
          if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
            setIsNavbarVisible(false);
          } else {
            setIsNavbarVisible(true);
          }
          
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar with CSS transitions */}
      <div
        ref={navbarRef}
        style={{
          transform: `translateY(${isNavbarVisible ? "0" : "-100%"})`,
          transition: "transform 0.3s ease-in-out",
        }}
        className="fixed top-0 left-0 w-full bg-black shadow-md z-50 text-white"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className=""><img src="/logo.svg" alt="Logo" /></div>
          <button onClick={toggleSidebar} className="p-2 focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <Dialog
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto "
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed top-0 right-0 h-full w-64 shadow-lg transition-transform bg-black text-white">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsSidebarOpen(false)} className="p-2">
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="space-y-4 px-4">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-500 block py-2">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Dialog>
    </>
  );
};

export default Navbar;