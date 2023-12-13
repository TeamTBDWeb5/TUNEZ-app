
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


const PopularArtistCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1,
    className: 'notes-slider',
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <Link to={'/artist/1'}>
        <div className="popular-artist artistA"></div>
        </Link>
        <Link to={'/artist/1'}>
        <div className="popular-artist artistB"></div>
        </Link>
        <Link to={'/artist/1'}>
        <div className="popular-artist artistC"></div>
        </Link>
   
    
      
      </Slider>
    </div>
  );
};

export default PopularArtistCarousel;
