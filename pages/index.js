import Head from "next/head";
import axios from "axios";
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";
// import {logo} from "../assets/logo"

export default function Home() {
  const [term, setTerm] = useState(null);
  const [response, setResponse] = useState(null);

  const getSearchResults = async () => {
    try {
      const res = await axios.get("api/search/", {
        params: { term },
      });
      const { data } = res;
      setResponse(data.tracks.hits);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen ">
      <Head>
        <title>Hack This Tune</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <h1 className="text-6xl text-primary font-bold mt-20">
        {/* <img src={logo} alt="logo of our website"/> */}
        Hack This <span className="text-active">Tune</span>
      </h1>
      <h2 className="text-active text-2xl mt-6 w-9/12 text-center">
        Our team has developed this website to make it easy for you to listen
        the main chorus of the songs.
      </h2>

      <div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
        <input
          type="text"
          className="block w-1/3 border border-transparent rounded-md px-5 py-3 text-base text-background shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-active"
          placeholder="Search for a song or an artist"
          onChange={(e) => setTerm(e.target.value)}
        />

        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            className="block w-full rounded-md px-5 py-3 bg-search text-base font-medium text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
            onClick={() => getSearchResults()}
          >
            Search
          </button>
        </div>
      </div>

      {response && (
        <div className="mt-16">
          <h3 className="text-secondary text-2xl">Search Results</h3>
          <div className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {response.map((song) => (
              <div key={song.track.title} className="pt-6">
                <div className="flow-root bg-cardbg px-3 pb-8 w-64">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center">
                      <span className="p-3 rounded-md shadow-lg">
                        <img
                          src={song.track.images.coverart}
                          width={180}
                          height={180}
                          className="mt-8"
                          alt={song.track.title}
                        />
                      </span>
                    </div>
                    <div className="text-center justify-center items-center">
                      <h3 className="mt-2 text-lg text-center font-medium text-background tracking-tight">
                        {song.track.title}
                      </h3>
                      <span className="mt-2 mb-4 max-w-xs text-sm text-background block">
                        {song.track.subtitle}
                      </span>
                      <a
                        className="mt-5 text-sm text-background underline border border-pink-500 py-2 px-5 hover:bg-active rounded-full"
                        href={song.track.url}
                        target="_blank"
                      >
                        Click here to tune
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 mb-10 text-center flex justify-center">
            <p className="text-primary text-center">
              <a className="hover:text-active flex text-center gap-2 text-xl items-center" href="#">
                Made with <BsFillHeartFill /> by devhacks team
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
