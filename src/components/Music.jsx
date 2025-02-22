import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TrueFocus from './TrueFocus';
import { Recommendations } from '../api';
import cover1 from '../images/cover1.png'
import cover2 from '../images/cover2.png'
import cover3 from '../images/cover3.png'

const Music = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [showSongs, setShowSongs] = useState(false);

  const handleRecommendation = async () => {
    setShowSongs(true);
    if (!query.trim()) {
      setError("Please enter a valid query");
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const data = await Recommendations(query);
      setResults(data.response);
    }
    catch (err) {
      setError("Failed to fetch recommendations");
      alert(error);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-screen h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center w-[100%]">
        <TrueFocus
          sentence="Get Music Recommendations"
          manualMode={false}
          blurAmount={5}
          borderColor="white"
          animationDuration={1}
          pauseBetweenAnimations={0.5}
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Enter song name"
          className="p-2 w-[30%] text-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
        />
        <button
          onClick={handleRecommendation}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </div>
      <AnimatePresence>
        {showSongs && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute w-[90%] p-1 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 shadow-[0_0_20px_5px] shadow-blue-500/50"
          >
            <div className="h-full w-full bg-gradient-to-r from-slate-900 to-black text-white overflow-x-hidden rounded-lg shadow-[0_0_30px_5px] shadow-green-500/50 overflow-y-scroll overflow-x-scroll">
              {loading ? (
                <div className='h-[100%] w-[100%] flex flex-col items-center justify-center text-center'><h1>LOADING...</h1></div>
              ) : (
                <>
                  <h2 className="text-4xl font-bold mb-4 text-center mb-8">Songs List</h2>
                  <div className='w-full'>
                    <table className="text-xs md:text-sm lg:text-xl table-auto w-full border-collapse border border-gray-500">
                      <thead>
                        <tr>
                          <th className="border border-gray-500 px-4 py-2">Image</th>
                          <th className="border border-gray-500 px-4 py-2">Name</th>
                          <th className="border border-gray-500 px-4 py-2">Album</th>
                          <th className="border border-gray-500 px-4 py-2">Artist</th>
                          <th className="border border-gray-500 px-4 py-2">Release Date</th>
                          <th className="border border-gray-500 px-4 py-2">Themes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.map((song, index) => (
                          <tr key={index}>
                            <td className="border border-gray-500 px-4 py-2">
                              {index%2===0 && (<img src={cover1} alt="cover" className="w-16 h-16 object-cover rounded-lg" />)}
                              {index%2===1 && (<img src={cover2} alt="cover" className="w-16 h-16 object-cover rounded-lg" />)}
                              {index%2===2 && (<img src={cover3} alt="cover" className="w-16 h-16 object-cover rounded-lg" />)}
                            </td>
                            <td className="border border-gray-500 px-4 py-2">{song.name}</td>
                            <td className="border border-gray-500 px-4 py-2">{song.album}</td>
                            <td className="border border-gray-500 px-4 py-2">{song.artist}</td>
                            <td className="border border-gray-500 px-4 py-2">{song.release_date}</td>
                            <td className="border border-gray-500 px-4 py-2">{song.themes.join(', ')}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
              <button
                onClick={() => setShowSongs(false)}
                className="absolute bottom-4 right-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Music;
