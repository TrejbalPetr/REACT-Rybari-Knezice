import React, {useEffect, useState} from 'react'
import "./scroll.css"
import ScrollTop from "../../images/ScrollTop.svg";

const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 300) {
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        }
    }, []);

    let opacity = "opacity-0";
    if (isVisible) {
        opacity = "opacity-100"
    }

    return (
        <div className='Scroll'>
            <button type='button' onClick={scrollToTop} className = {opacity}>
                <img src={ScrollTop} alt="ScrollTop"/>
            </button>
        </div>
  )
}

export default Scroll