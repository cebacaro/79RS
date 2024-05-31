import React, { useState } from "react";

const Shows = () => {
  const [videosLoaded, setVideosLoaded] = useState(false);
  const handleVideoLoading = () => {
    setVideosLoaded(true);
  };

  return (
    <div className="home bg-gradient-to-b from-[#832388] to-[#E3436B] flex flex-col text-gray-500 text-center relative">
      <div className="flex flex-col relative w-full h-[80%] self-center">
        <div>
          <h1 className="text-4xl font-aboreto font-light text-white m-8 justify-center self-center mb-10">
            Videos
          </h1>
        </div>
        <div className="flex justify-around mb-10">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4 text-white">
              <h2 className="font-aboreto font-light">79rs Bout to Blow</h2>
              <div className="relative lg:w-[660px] lg:h-[370px] w-full h-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/KgB2XkRd_fM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onLoad={handleVideoLoading}
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-white">
              <h2 className="font-aboreto font-light">Brand New Day</h2>
              <div className="relative lg:w-[660px] lg:h-[370px] w-full h-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/UpUHZfLJy9Y"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-white">
              <h2 className="font-aboreto font-light">The OnBeat Sessions</h2>
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/l_1DAODmn54"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-white">
              <h2 className="font-aboreto font-light">Stop the Water</h2>
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/ZkWLsWtyRug"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-aboreto font-light text-white m-8 justify-center self-center mb-10">
            France
          </h1>
        </div>
        <div className="flex justify-around mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="flex flex-col gap-4 text-white">
              <h2 className="font-aboreto font-light">
                Live on KEXP (French edition)
              </h2>
              <div className="relative lg:w-[660px] lg:h-[370px] w-full h-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/OTzoyzbuubs"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-white">
              <h2 className="font-aboreto font-light">
                Trans Musicales de Rennes
              </h2>
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/kb91eYw98Mo"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-white">
              <h2 className="font-aboreto font-light">Fip en Trans</h2>
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/kJe4ZWAaTHA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        {!videosLoaded && (
          <div className="absolute w-full h-full bg-gradient-to-b from-[#832388] to-[#E3436B] flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500 mt-[20%]"></div>
            <h1 className="mt-[23%] absolute text-white">Loading....</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shows;
