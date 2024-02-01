import React from 'react';
import Carousel from 'react-responsive-carousel';
import Image from 'next/image'; 
import Image1 from '../../../public/banner/1.png'
import Image2 from '../../../public/banner/2.png'
import Image3 from '../../../public/banner/3.png'

function HeroBanner() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const onClickItem = (index) => {
    console.log('Item clicked:', index);
  };

  const onClickThumb = (index) => {
    console.log('Thumb clicked:', index);
  };

  return (
    <Carousel
      showArrows={true}
      activeIndex={activeIndex}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      <div>
        <Image src={Image1} alt="Image 1" height={100} width={100} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <Image src={Image2} alt="Image 2" height={100} width={100} />
        <p className="legend">Legend 2</p>
          </div>
          <div>
        <Image src={Image3} alt="Image 3" height={100} width={100}/>
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}

export default HeroBanner;
