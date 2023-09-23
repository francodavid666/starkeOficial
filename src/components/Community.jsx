import React from 'react';

//import data
import { community } from '../data';

//import components
import { CommunitySlider } from './CommunitySlider';

const Community = () => {
  //destructure commnity data
  const {icon,title,testimonials} = community


  return <section
  className='section relative'>
    <div className="container mx-auto">
      <div className='flex'>
      <div className='section-title-group m ax-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto'
      data-aos='fade-up'
      data-aos-offset='200'
      data-aos-delay='200'>
      {/*section title */}
      <img  src={icon} alt="" />
      <h2 className='h2 section-title' >{title} <span className='text-red-500'>.</span></h2>
    </div>
    {/* slider */}
    <div className='absolute -right-[375px] lg:-right-[280px] w-[1140px] top-48 lg:top-0'
    data-aos='fade-left'
    data-aos-offset='200'
    data-aos-delay='300'>
      <CommunitySlider testimonials={testimonials} />
    </div>
    </div>
      </div>
  
    </section>;
};

export default Community;
