import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Class = ({ name, description, image }) => {
    const overlayStyles = `p-5 absolute z-30 flex
  h-[380px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;
    return (_jsxs("li", { className: "relative mx-5 inline-block h-[380px] w-[450px]", children: [_jsxs("div", { className: overlayStyles, children: [_jsx("p", { className: "text-2xl", children: name }), _jsx("p", { className: "mt-5", children: description })] }), _jsx("img", { alt: `${image}`, src: image })] }));
};
export default Class;
