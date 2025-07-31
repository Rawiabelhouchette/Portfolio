import ScrollToTop from "react-scroll-to-top"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopScroll() {
    return <ScrollToTop
        smooth
        className="custom-scroll-to-top"
        component={<FontAwesomeIcon icon={faArrowUp} />}
    />
}