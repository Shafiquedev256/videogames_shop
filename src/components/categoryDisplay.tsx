import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useGames } from "../useGames";

export type Props = {
  category: string;
};

const Catgory_desplay = ({ category }: Props) => {
  const { data, isLoading, error } = useGames({ category });
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='my-6 py-6 mx-3 font-body '>
        <h1 className='text-gray-200 text-2xl font-bold font-title tracking-wide pb-6 px-3'>
          {category}
        </h1>
        {isLoading && (
          <div className='flex items-center justify-center'>
            <div className=' rounded-full w-20 h-20 border-2 border-t-green-500 border-b-purple-500 p-10 animate-spin'></div>
          </div>
        )}
        {error && (
          <div className='flex items-center justify-center'>
            <div className='border-2 rounded-full w-20 h-20 text-red-700'>
              {error}
            </div>
          </div>
        )}
        <div className='mx-3 rounded-lg slider-container'>
          <Slider {...settings}>
            {data?.map((item) => (
              <div
                key={item.title}
                className=' w-[200px] h-[300px] bg-gray-900 overflow-hidden rounded-lg'
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className='rounded-t-lg mb-2 h-[50%] w-[100%] hover:w-[450px]'
                />
                <div className='text-gray-500 p-2 h-[40%]  rounded-lg glassbg bg-gray-900 bg-opacity-50  w-[100%]'>
                  <h2 className=' text-white font-body'>{item.title}</h2>
                  <div className='text-gray-300 flex flex-col text-sm space-y-1 mt-3'>
                    <p className=' flex flex-row justify-between items-center w-[80%]'>
                      <span>Category: </span>
                      <span className='text-left'>{item.category}</span>
                    </p>
                    <p className=' flex flex-row justify-between items-center  w-[80%]'>
                      <span>Cost: </span>
                      <span className='text-left'>{item.cost}</span>
                    </p>
                    <p className=' flex flex-row justify-between items-center  w-[80%]'>
                      <span>Platform: </span>
                      <span className='flex items-start'>{item.platform}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Catgory_desplay;
