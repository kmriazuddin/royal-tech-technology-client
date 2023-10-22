// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 15000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img src="https://i.ibb.co/23KBVwW/Untitled-2.jpg" alt="" />
                    </div>
                    <div className='hidden md:inline-block absolute text-white top-1 md:top-14 lg:top-20'>
                        <h1 className='md:text-2xl lg:text-6xl font-semibold'>iPhone 15 Por</h1>
                        <p>Titanium, So Strong, So Light, So Pro</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="https://i.ibb.co/HhdWTK2/Untitled-3.jpg" alt="" />
                    </div>
                    <div className='hidden md:inline-block absolute text-white bottom-5 lg:bottom-10 right-10 lg:right-24'>
                        <h1 className='md:text-2xl lg:text-6xl font-semibold'>Galaxy S23 Ultra</h1>
                        <p>Still The King Of Low-Light Photography</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src="https://i.ibb.co/58Zs0Y2/Untitled-4.jpg" alt="" />
                    </div>
                    <div className='hidden md:inline-block absolute text-black left-10'>
                        <h1 className='md:text-2xl lg:text-6xl font-semibold'>Galaxy S23 Ultra</h1>
                        <p>Still The King Of Low-Light Photography</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='relative' src="https://i.ibb.co/9hkWcyj/Untitled-5.jpg" alt="Banner" />
                    </div>
                    <div className='hidden md:inline-block absolute text-white top-1 md:top-14 lg:top-20'>
                        <h1 className='md:text-2xl lg:text-6xl font-semibold'>Intel® Core™ Processor Family</h1>
                        <p>Next-Level Performance</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;