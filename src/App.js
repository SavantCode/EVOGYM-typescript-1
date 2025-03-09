import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import OurClasses from "@/scenes/ourClasses";
import Benefits from "@/scenes/benefits";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
function App() {
    const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0)
                setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (_jsxs("div", { className: "app bg-gray-20", children: [_jsx(Navbar, { isTopOfPage: isTopOfPage, selectedPage: selectedPage, setSelectedPage: setSelectedPage }), _jsx(Home, { setSelectedPage: setSelectedPage }), _jsx(Benefits, { setSelectedPage: setSelectedPage }), _jsx(OurClasses, { setSelectedPage: setSelectedPage }), _jsx(ContactUs, { setSelectedPage: setSelectedPage }), _jsx(Footer, {})] }));
}
export default App;
