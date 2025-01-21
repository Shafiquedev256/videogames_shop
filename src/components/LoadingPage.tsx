import { useGames } from "../useGames";

const Loading = () => {
  const { isLoading } = useGames({ category: "All" });
  return (
    <>
      {isLoading && (
        <div className=' fixed top-0 w-[100%] h-[100vh] z-50 bg-red-700 flex flex-col items-center justify-center bg-[url("https://games-b26f.kxcdn.com/wp-content/uploads/2014/03/Star-Citizen.jpg")] bg-no-repeat bg-cover bg-center'>
          <div className='glassbg bg-black bg-opacity-40 w-[100%] h-[100%] flex flex-col items-center justify-center'>
            <div className='w-10 h-10 p-6 border-white border-2 border-r-blue-600 border-l-yellow-600 border-b-red-600 border-t-green-600 animate-spin'></div>
            <p className=' text-white animate-pulse font-title font-bold tracking-wider'>
              Loading <span className='animate-bounce'>...</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Loading;
