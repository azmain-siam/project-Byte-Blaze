import Hero from "../Components/Hero";
import wave from "../assets/wave.svg";
const Home = () => {
  return (
    <div className="flex justify-center flex-col min-h-[calc(100vh-120px)] relative">
      <Hero></Hero>
      <img className="absolute bottom-0 w-full" src={wave} alt="" />
    </div>
  );
};

export default Home;
