import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const CourseCarousel = () => {
  return (
    <div className='w-full bg-gray-900 py-10 px-5'>
      <Swiper
        effect='creative'
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[EffectCreative, Pagination]}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        className='max-w-sm mx-auto'>
        {/* Slide 1 */}
        <SwiperSlide>
          <div className='bg-gray-800 aspect-square rounded-xl p-6 shadow-xl text-white flex flex-col justify-center items-center text-center'>
            <h3 className='text-xl font-bold mb-4'>
              Beginner to Pro (₹15,000)
            </h3>
            <ul className='list-disc list-inside text-sm space-y-1 text-white'>
              <li>Stocks</li>
              <li>Stock options</li>
              <li>Intraday trading</li>
              <li>Positional strategy</li>
              <li>Swing trading</li>
              <li>Result-based stock strategies</li>
              <li>Custom stock selection tool</li>
            </ul>
            <p className='mt-4 text-sm'>
              <strong>Duration:</strong> 1 to 3 months (flexible, no extra cost)
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className='bg-gray-800 aspect-square rounded-xl p-6 shadow-xl text-white flex flex-col justify-center items-center text-center'>
            <h3 className='text-xl font-bold mb-4'>Index Mastery (₹15,000)</h3>
            <ul className='list-disc list-inside text-sm space-y-1 text-white'>
              <li>Index Options Buying</li>
              <li>Index Options Selling</li>
            </ul>
            <p className='mt-4 text-sm font-medium'>
              Includes 1-on-1 training & lifetime access.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CourseCarousel;
