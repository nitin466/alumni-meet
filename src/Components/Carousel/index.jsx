import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import carouse_img_1 from '../../assets/1.jpg';
import carouse_img_2 from '../../assets/2.jpg';
import carouse_img_3 from '../../assets/3.jpg';
import carouse_img_4 from '../../assets/4.jpg';
import carouse_img_5 from '../../assets/5.jpg';
import carouse_img_6 from '../../assets/6.jpg';
import carouse_img_7 from '../../assets/7.jpg';
import carouse_img_8 from '../../assets/8.jpg'; 
import carouse_img_9 from '../../assets/9.jpg';
import carouse_img_10 from '../../assets/10.jpg';
import carouse_img_11 from '../../assets/11.jpg';
import carouse_img_12 from '../../assets/12.jpg';

const items = [
  {
    src: carouse_img_1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: carouse_img_2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: carouse_img_3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
  {
    src: carouse_img_4,
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 4,
  },
  {
    src: carouse_img_5,
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 5,
  },
  {
    src: carouse_img_6,
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 6,
  },
  {
    src: carouse_img_7,
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 7,
  },
  {
    src: carouse_img_8,
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 8,
  },
  {
    src: carouse_img_9,
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 9,
  },
  {
    src: carouse_img_10,
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 10,
  },
  {
    src: carouse_img_11,
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 11,
  },
  {
    src: carouse_img_12,
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 12,
  },
];

function HomeCarousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default HomeCarousel;