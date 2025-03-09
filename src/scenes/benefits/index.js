import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon, } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";
const benefits = [
    {
        icon: _jsx(HomeModernIcon, { className: "h-6 w-6" }),
        title: "State of the Art Facilities",
        description: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
        icon: _jsx(UserGroupIcon, { className: "h-6 w-6" }),
        title: "100's of Diverse Classes",
        description: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
        icon: _jsx(AcademicCapIcon, { className: "h-6 w-6" }),
        title: "Expert and Pro Trainers",
        description: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
];
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};
const Benefits = ({ setSelectedPage }) => {
    return (_jsx("section", { id: "benefits", className: "mx-auto min-h-full w-5/6 py-20", children: _jsxs(motion.div, { onViewportEnter: () => setSelectedPage(SelectedPage.Benefits), children: [_jsxs(motion.div, { className: "md:my-5 md:w-3/5", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 }, transition: { duration: 0.5 }, variants: {
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }, children: [_jsx(HText, { children: "MORE THAN JUST GYM." }), _jsx("p", { className: "my-5 text-sm", children: "We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member." })] }), _jsx(motion.div, { className: "mt-5 items-center justify-between gap-8 md:flex", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 }, variants: container, children: benefits.map((benefit) => (_jsx(Benefit, { icon: benefit.icon, title: benefit.title, description: benefit.description, setSelectedPage: setSelectedPage }, benefit.title))) }), _jsxs("div", { className: "mt-16 items-center justify-between gap-20 md:mt-28 md:flex", children: [_jsx("img", { className: "mx-auto", alt: "benefits-page-graphic", src: BenefitsPageGraphic }), _jsxs("div", { children: [_jsx("div", { className: "relative", children: _jsx("div", { className: "before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves", children: _jsx(motion.div, { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 }, transition: { duration: 0.5 }, variants: {
                                                hidden: { opacity: 0, x: 50 },
                                                visible: { opacity: 1, x: 0 },
                                            }, children: _jsxs(HText, { children: ["MILLIONS OF HAPPY MEMBERS GETTING", " ", _jsx("span", { className: "text-primary-500", children: "FIT" })] }) }) }) }), _jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 }, transition: { delay: 0.2, duration: 0.5 }, variants: {
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }, children: [_jsx("p", { className: "my-5", children: "Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio." }), _jsx("p", { className: "mb-5", children: "Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc." })] }), _jsx("div", { className: "relative mt-16", children: _jsx("div", { className: "before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles", children: _jsx(ActionButton, { setSelectedPage: setSelectedPage, children: "Join Now" }) }) })] })] })] }) }));
};
export default Benefits;
