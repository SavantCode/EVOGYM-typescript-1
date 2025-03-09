import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    return (_jsxs("nav", { children: [_jsx("div", { className: `${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`, children: _jsx("div", { className: `${flexBetween} mx-auto w-5/6`, children: _jsxs("div", { className: `${flexBetween} w-full gap-16`, children: [_jsx("img", { alt: "logo", src: Logo }), isAboveMediumScreens ? (_jsxs("div", { className: `${flexBetween} w-full`, children: [_jsxs("div", { className: `${flexBetween} gap-8 text-sm`, children: [_jsx(Link, { page: "Home", selectedPage: selectedPage, setSelectedPage: setSelectedPage }), _jsx(Link, { page: "Benefits", selectedPage: selectedPage, setSelectedPage: setSelectedPage }), _jsx(Link, { page: "Our Classes", selectedPage: selectedPage, setSelectedPage: setSelectedPage }), _jsx(Link, { page: "Contact Us", selectedPage: selectedPage, setSelectedPage: setSelectedPage })] }), _jsxs("div", { className: `${flexBetween} gap-8`, children: [_jsx("p", { children: "Sign In" }), _jsx(ActionButton, { setSelectedPage: setSelectedPage, children: "Become a Member" })] })] })) : (_jsx("button", { className: "rounded-full bg-secondary-500 p-2", onClick: () => setIsMenuToggled(!isMenuToggled), children: _jsx(Bars3Icon, { className: "h-6 w-6 text-white" }) }))] }) }) }), !isAboveMediumScreens && isMenuToggled && (_jsxs("div", { className: "fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl", children: [_jsx("div", { className: "flex justify-end p-12", children: _jsx("button", { onClick: () => setIsMenuToggled(!isMenuToggled), children: _jsx(XMarkIcon, { className: "h-6 w-6 text-gray-400" }) }) }), _jsxs("div", { className: "ml-[33%] flex flex-col gap-10 text-2xl", children: [_jsx(Link, { page: "Home", selectedPage: selectedPage, setSelectedPage: setSelectedPage }), _jsx(Link, { page: "Benefits", selectedPage: selectedPage, setSelectedPage: setSelectedPage }), _jsx(Link, { page: "Our Classes", selectedPage: selectedPage, setSelectedPage: setSelectedPage }), _jsx(Link, { page: "Contact Us", selectedPage: selectedPage, setSelectedPage: setSelectedPage })] })] }))] }));
};
export default Navbar;
