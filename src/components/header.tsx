import { useState } from "react";
import { Link } from "react-router-dom";
import { ApiData, useGames } from "../useGames";

const Header_section = () => {
  const { dataAll, isLoading } = useGames({ category: "All" });
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<ApiData[] | undefined>(undefined);
  const handleInput = async (e: any) => {
    setSearch(e.target.value);
    const data = await dataAll?.filter((item) =>
      item.title
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    setResults(data);
  };
  return (
    <>
      <header className='glassbg font-body z-50 fixed top-0 w-[100%] left-0 p-3 md:p-5 bg-gray-950 bg-opacity-20'>
        <div className='w-[100%] relative  flex flex-row justify-between md:justify-evenly items-center'>
          <div className='text-gray-200 text-2xl font-bold whitespace-nowrap text-left px-2 font-title md:w-2/6'>
            S.M Games.
          </div>
          <div className='hidden md:flex md:flex-row md:w-4/6 md:justify-evenly md:items-center'>
            <div className='text-gray-200 flex flex-row justify-evenly w-2/6 font-semibold'>
              <Link to={"/category/Race"} className='hover:text-white '>
                Race
              </Link>
              <Link to={"/category/Action"} className='hover:text-white '>
                Action
              </Link>
              <Link to={"/category/sports"} className='hover:text-white '>
                Sports
              </Link>
            </div>
            <div className='relative'>
              <div className='relative rounded-full flex flex-row items-center border-[1px] px-3 py-1 border-gray-200'>
                <input
                  value={search}
                  onChange={handleInput}
                  type='text'
                  placeholder='search...'
                  className='bg-opacity-0 bg-gray-950  outline-none text-white placeholder-gray-200  p-[1px]'
                />
                <span className='text-gray-200'>
                  <svg
                    className='w-4 h-4'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                  <span className='sr-only'>Search</span>
                </span>
              </div>
              {search && (
                <div className='absolute bg-white bg-opacity-95 max-h-[50vh] overflow-y-scroll  glassbg2  rounded-none left-0 w-[100%] '>
                  {isLoading && (
                    <div className='flex items-center justify-center'>
                      <div className=' rounded-full w-10 h-10 border-2 border-t-green-500 border-b-purple-500 p-6 animate-spin'></div>
                    </div>
                  )}

                  {results ? (
                    <div>
                      {results.map((item) => (
                        <div className='hover:text-purple-500 hover:text-lg p-2 border-0 border-b-[1px] border-b-gray-300 m-2'>
                          {item.title}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div> Game no found </div>
                  )}
                </div>
              )}
            </div>

            <div className='hidden lg:flex lg:flex-1 lg:justify-end w-2/6'>
              <Link
                to={"/"}
                className=' font-semibold text-gray-200  hover:text-white'
              >
                Log in <span aria-hidden='true'>&rarr;</span>
              </Link>
            </div>
          </div>
          <div className='flex md:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='size-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2'
                stroke='currentColor'
                aria-hidden='true'
                data-slot='icon'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header_section;
