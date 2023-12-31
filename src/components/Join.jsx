import React from 'react';

// import data
import { join } from '../data';


const Join = () => {

  //destructure join data
  const{image,subtitle,btnText} = join
    return (
    <section className='bg-neutral-500 min-h-[537px] '>
        <div className='container mx-auto'>
          {/* imge & wrapper */}
          <div className='flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0 ' >
            {/* image */}
            <div className='-mt-[80px] max-w-[276px] md:max-w-[442px] lf:max-w-full'
            data-aos='fade-right' 
            data-aos-offset='100'
            data-aos-delay='100'
            >
              <img src={image} alt="clases de funcional" />
            </div>
            {/* text*/}
            <div className='max-w-[350px] lg:max-w-[492px] ml-[30px] '
              data-aos='fade-left' 
              data-aos-offset='100'
              data-aos-delay='100'
              >
              <h2 className='h1 md:text-[60px] md:leading-[62px] mb-4 lg:mb-6 text-white ' > 
                Quieres tener tu cuerpo soñado  <span className='text-red-500'>&</span> divertirte? 
                </h2>
                <p className='text-body-sm md:text-body-md text-white mb-4 lb:mb-6 max-w-[470px] lg:max-w-[492px] ' > {subtitle} </p>
                <button className='btn btn-secondary btn-lg' > 
                <a href="https://api.whatsapp.com/send?phone=+541123709305" target='_blank'>
                {btnText} 
         </a>
                </button>
            </div>
          </div>

        </div>
      </section>
    )
};

export default Join;
