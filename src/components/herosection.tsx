import { useGames } from "../useGames";
import Header_section from "./header";
import "./hero.css";

const Hero_section = () => {
  const { dataAll } = useGames({ category: "All" });
  if (!dataAll) return;
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
            <img src={dataAll[0].img} alt={dataAll[0].title} />
          </div>
          <div
            className='item'
            style={{ "--position": 2 } as React.CSSProperties}
          >
            <img src={dataAll[1].img} alt={dataAll[1].title} />
          </div>
          <div
            className='item'
            style={{ "--position": 3 } as React.CSSProperties}
          >
            <img src={dataAll[2].img} alt={dataAll[2].title} />
          </div>
          <div
            className='item'
            style={{ "--position": 4 } as React.CSSProperties}
          >
            <img src={dataAll[3].img} alt={dataAll[3].title} />
          </div>
          <div
            className='item'
            style={{ "--position": 5 } as React.CSSProperties}
          >
            <img src={dataAll[6].img} alt={dataAll[6].title} />
          </div>
          <div
            className='item'
            style={{ "--position": 6 } as React.CSSProperties}
          >
            <img src={dataAll[10].img} alt={dataAll[10].title} />
          </div>
          <div
            className='item'
            style={{ "--position": 7 } as React.CSSProperties}
          >
            <img src={dataAll[16].img} alt={dataAll[16].title} />
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
