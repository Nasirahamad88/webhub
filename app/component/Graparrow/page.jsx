import Image from 'next/image';
import React from 'react';
import Arrow from '../../../public/arrow.png'

function GraphSection() {
  return (
      <div
  className="flex justify-center items-center relative"
>
  <Image
    src={Arrow}
    alt="arrow"
    className="lg:w-44 lg:h-44 transform hover:animate-bounce duration-700 ease-in-out"
  />
</div>

    )
}

export default GraphSection;
