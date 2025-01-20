import { useGames } from "../useGames";
import Header_section from "./header";
import "./hero.css";

const Hero_section = () => {
  const { dataAll } = useGames({ category: "All" });
  return (
    <>
      <Header_section />
      <div className='banner'>
        <div className='model'></div>
        <div
          className='slider'
          style={{ "--quantity": 7 } as React.CSSProperties}
        >
          <div
            className='item'
            style={{ "--position": 1 } as React.CSSProperties}
          >
            <img src='/src/assets/img_1.avif' alt='' />
          </div>
          <div
            className='item'
            style={{ "--position": 2 } as React.CSSProperties}
          >
            <img src='/src/assets/img_2.avif' alt='' />
          </div>
          <div
            className='item'
            style={{ "--position": 3 } as React.CSSProperties}
          >
            <img src='/src/assets/img_3.webp' alt='' />
          </div>
          <div
            className='item'
            style={{ "--position": 4 } as React.CSSProperties}
          >
            <img src='/src/assets/img_4.webp' alt='' />
          </div>
          <div
            className='item'
            style={{ "--position": 5 } as React.CSSProperties}
          >
            <img src='/src/assets/img_5.webp' alt='' />
          </div>
          <div
            className='item'
            style={{ "--position": 6 } as React.CSSProperties}
          >
            <img src='/src/assets/img_6.avif' alt='' />
          </div>
          <div
            className='item'
            style={{ "--position": 7 } as React.CSSProperties}
          >
            <img src='/src/assets/img_6.avif' alt='' />
          </div>
        </div>
        <div className='content'>
          {dataAll && (
            <>
              <img src={dataAll[15].img} alt='' />
              <div className='flex flex-col justify-center items-center'>
                <h1 className='font-body font-bold text-xl tracking-wide'>
                  {dataAll[15].title}
                </h1>
                <p className='font-body'>| PlayStation | 2035</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero_section;
