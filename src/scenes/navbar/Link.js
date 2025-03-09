import { jsx as _jsx } from "react/jsx-runtime";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "");
    return (_jsx(AnchorLink, { className: `${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
      `, href: `#${lowerCasePage}`, onClick: () => setSelectedPage(lowerCasePage), children: page }));
};
export default Link;
