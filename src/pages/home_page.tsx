import Catgory_desplay from "../components/categoryDisplay";
import { Footer } from "../components/footerSection";
import Hero_section from "../components/herosection";
import img1 from "../assets/hero3.avif";
import img2 from "../assets/hero2.avif";
const Home_page = () => {
  return (
    <>
      <div className='bg-gray-950 min-h-[100vh] w-[100%] overflow-hidden'>
        <Hero_section />
        <Catgory_desplay category='Race' />
        <div className=' md:h-[70vh] flex flex-col md:mx-4 md:flex-row justify-between items-center overflow-hidden'>
          <h1 className='text-gray-200 text-2xl font-body text-center font-bold'>
            FIRST-PERSON SHOOTER <br />
            <span>(Coming soon!)</span>
          </h1>
          <img src={img1} alt='' className=' md:w-4/5 rounded-lg h-[100%]' />
        </div>
        <Catgory_desplay category='Action' />
        <div className=' md:h-[70vh] h-[50vh] flex flex-col  md:mx-4 md:flex-row-reverse justify-center  items-center overflow-hidden'>
          <h1 className='text-gray-200 text-2xl font-body text-center font-bold md:w-1/5'>
            UFC 4 <br />
            <span>(Is Out!)</span>
          </h1>
          <div className='h-[100%] md:w-4/5'>
            <img
              src={img2}
              alt=''
              className=' w-[100%] object-center rounded-lg h-[100%]'
            />
          </div>
        </div>
        <Catgory_desplay category='sports' />
        <Catgory_desplay category='Action, Adventure, Unique' />
        <Catgory_desplay category='All' />
      </div>
      <Footer />
    </>
  );
};

export default Home_page;
