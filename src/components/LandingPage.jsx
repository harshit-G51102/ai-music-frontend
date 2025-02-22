import { Link } from 'react-router-dom';
import Aurora from './Aurora';
import GradientText from './GradientText';
import ShinyText from './Shinytext';

const LandingPage = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      {/* Aurora Background */}
      <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} speed={0.5} />

      {/* Content on top of the background */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <GradientText
          className="text-6xl  md:text-8xl  mb-6"
          colors={["#ffff33", "#efc4f7", "#33f1d4"]}
          animationSpeed={5}
        >
          Welcome to My AI Music Recommender
        </GradientText>
        <p className="text-xl">Discover personalized music tailored to your vibe and mood.</p>
        <Link
          to="/music"
          className="mt-8 px-8 py-4 border-2 border-gray-400 bg-gray-800 hover:bg-gray-900 rounded-2xl text-xl"
        >
          <ShinyText text="Get Started" speed={1} />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;