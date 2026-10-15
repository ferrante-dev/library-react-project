import Landing from "../components/Landing";
import Highlights from "../components/Highlights.jsx"
import Featured from "../components/Featured.jsx";
import Discounted from "../components/Discounted.jsx";
import Explore from "../components/Explore.jsx";

const Home = () => {
  return (
    <>
      <h1>Howdy</h1>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
