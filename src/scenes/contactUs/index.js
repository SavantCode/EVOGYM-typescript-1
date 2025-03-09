var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
const ContactUs = ({ setSelectedPage }) => {
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`;
    const { register, trigger, formState: { errors }, } = useForm();
    const onSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        const isValid = yield trigger();
        if (!isValid) {
            e.preventDefault();
        }
    });
    return (_jsx("section", { id: "contactus", className: "mx-auto w-5/6 pt-24 pb-32", children: _jsxs(motion.div, { onViewportEnter: () => setSelectedPage(SelectedPage.ContactUs), children: [_jsxs(motion.div, { className: "md:w-3/5", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 }, transition: { duration: 0.5 }, variants: {
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }, children: [_jsxs(HText, { children: [_jsx("span", { className: "text-primary-500", children: "JOIN NOW" }), " TO GET IN SHAPE"] }), _jsx("p", { className: "my-5", children: "Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis." })] }), _jsxs("div", { className: "mt-10 justify-between gap-8 md:flex", children: [_jsx(motion.div, { className: "mt-10 basis-3/5 md:mt-0", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 }, transition: { duration: 0.5 }, variants: {
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }, children: _jsxs("form", { target: "_blank", onSubmit: onSubmit, action: "https://formsubmit.co/ca3a0db8922c09fb9b5aaee2871f03ca", method: "POST", children: [_jsx("input", Object.assign({ className: inputStyles, type: "text", placeholder: "NAME" }, register("name", {
                                        required: true,
                                        maxLength: 100,
                                    }))), errors.name && (_jsxs("p", { className: "mt-1 text-primary-500", children: [errors.name.type === "required" && "This field is required.", errors.name.type === "maxLength" &&
                                                "Max length is 100 char."] })), _jsx("input", Object.assign({ className: inputStyles, type: "text", placeholder: "EMAIL" }, register("email", {
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    }))), errors.email && (_jsxs("p", { className: "mt-1 text-primary-500", children: [errors.email.type === "required" &&
                                                "This field is required.", errors.email.type === "pattern" && "Invalid email address."] })), _jsx("textarea", Object.assign({ className: inputStyles, placeholder: "MESSAGE", rows: 4, cols: 50 }, register("message", {
                                        required: true,
                                        maxLength: 2000,
                                    }))), errors.message && (_jsxs("p", { className: "mt-1 text-primary-500", children: [errors.message.type === "required" &&
                                                "This field is required.", errors.message.type === "maxLength" &&
                                                "Max length is 2000 char."] })), _jsx("button", { type: "submit", className: "mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white", children: "SUBMIT" })] }) }), _jsx(motion.div, { className: "relative mt-16 basis-2/5 md:mt-0", initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.5 }, transition: { delay: 0.2, duration: 0.5 }, variants: {
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }, children: _jsx("div", { className: "w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext", children: _jsx("img", { className: "w-full", alt: "contact-us-page-graphic", src: ContactUsPageGraphic }) }) })] })] }) }));
};
export default ContactUs;
