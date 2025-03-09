import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
const Home = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    return (_jsxs("section", { id: "home", className: "gap-16 bg-gray-20 py-10 md:h-full md:pb-0", children: [_jsxs(motion.div, { className: "mx-auto w-5/6 items-center justify-center md:flex md:h-5/6", onViewportEnter: () => setSelectedPage(SelectedPage.Home), children: [_jsxs("div", { className: "z-10 mt-32 md:basis-3/5", children: [_jsxs(motion.div, { className: "md:-mt-20", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 }, transition: { duration: 0.5 }, variants: {
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0 },
                                }, children: [_jsx("div", { className: "relative", children: _jsx("div", { className: "before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext", children: _jsx("img", { alt: "home-page-text", src: HomePageText }) }) }), _jsx("p", { className: "mt-8 text-sm", children: "Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now." })] }), _jsxs(motion.div, { className: "mt-8 flex items-center gap-8", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 }, transition: { delay: 0.2, duration: 0.5 }, variants: {
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0 },
                                }, children: [_jsx(ActionButton, { setSelectedPage: setSelectedPage, children: "Join Now" }), _jsx(AnchorLink, { className: "text-sm font-bold text-primary-500 underline hover:text-secondary-500", onClick: () => setSelectedPage(SelectedPage.ContactUs), href: `#${SelectedPage.ContactUs}`, children: _jsx("p", { children: "Learn More" }) })] })] }), _jsx("div", { className: "flex basis-3/5 justify-center md:z-10\n              md:ml-40 md:mt-16 md:justify-items-end", children: _jsx("img", { alt: "home-pageGraphic", src: HomePageGraphic }) })] }), isAboveMediumScreens && (_jsx("div", { className: "h-[150px] w-full bg-primary-100 py-10", children: _jsx("div", { className: "mx-auto w-5/6", children: _jsxs("div", { className: "flex w-3/5 items-center justify-between gap-8", children: [_jsx("img", { alt: "redbull-sponsor", src: SponsorRedBull }), _jsx("img", { alt: "forbes-sponsor", src: SponsorForbes }), _jsx("img", { alt: "fortune-sponsor", src: SponsorFortune })] }) }) }))] }));
};
export default Home;
