import { useParams } from "react-router-dom";
import Header_section from "../components/header";
import { Footer } from "../components/footerSection";
import Catgory_desplay from "../components/categoryDisplay";
import Loading from "../components/LoadingPage";

const CategoryPage = () => {
  const { category } = useParams();

  return (
    <>
      <Loading />
      <Header_section />
      <div className=' bg-gray-950 mt-32'>
        {category && <Catgory_desplay category={category} />}
      </div>
      <Footer />
    </>
  );
};
export default CategoryPage;
