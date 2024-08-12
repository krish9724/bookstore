import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './cards';

function FreeBook() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('/list.json')
      .then(response => response.json())
      .then(data => setList(data))
      .catch(error => console.error('Error fetching list:', error));
  }, []);

  const filterData = list.filter(data => data.category === "free");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 sm:px-4'>
      <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>
          Unlock your imagination with our free course on creative writing! Whether you're a beginner or an experienced writer looking to hone your skills, this course offers valuable insights into crafting compelling narratives and creating vivid characters. Learn the art of storytelling through interactive exercises.
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FreeBook;
