import { useState, useEffect } from "react";
import ChevronLeft from "../../images/chevron-left.svg";
import ChevronRight from "../../images/chevron-right.svg";
import { COLORS } from "../../colors";
import "./catches.css";


const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect (() => {
        const slideInterval = setInterval(() => {
            const isLastSlide = currentIndex === slides.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);         
        }, 3000)
        
        return () => clearInterval(slideInterval)
  })



  return (
    <div className="Slider">
        <div className="SliderFish">
            <img src={ChevronLeft} alt="Chevron Left" onClick={goToPrevious}/>
            <div className="Card">
                <div className="CardText">
                    <div className='FishText'>
                        <h2 style={{color: COLORS.white}}>{slides[currentIndex].title}</h2>
                        <p style={{color: COLORS.greyText}}>{slides[currentIndex].name}</p>
                        <p style={{color: COLORS.greyText}}>{slides[currentIndex].date}</p>
                        <p style={{paddingBottom: "10px", color: COLORS.greyText}}>{slides[currentIndex].time}</p>
                        <p style={{color: COLORS.greyText}}>Technika: {slides[currentIndex].tech}</p>
                        <p style={{color: COLORS.greyText}}>Návnada: {slides[currentIndex].bait}</p>
                    </div>
                    <div className='Measures'>
                        <div>
                            <h2>{slides[currentIndex].cm}</h2>
                            <h4>cm</h4>
                        </div>
                        <div>
                            <h2>{slides[currentIndex].kg}</h2>
                            <h4>kg</h4>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="Img"></div>  {/* 4:3 */}
            </div>
            <img src={ChevronRight} alt="Chevron Right" onClick={goToNext}/>
        </div>
        <div className="Dots">
            {slides.map((slide, slideIndex) => (
                <div className={`DotStyle${slideIndex === currentIndex ? " Active": ""}`} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                    ●
                </div>
            ))}
        </div>
    </div>
  );
};

export default Slider;