import React, { useState } from "react";

const Shows = () => {
  const [videosLoaded, setVideosLoaded] = useState(false);
  const handleVideoLoading = () => {
    setVideosLoaded(true);
  };

  return (
    <div className="home bg-gradient-to-b from-[#832388]  to-[#E3436B]   flex flex-col text-gray-500 text-center relative ">
      <div className="flex flex-col relative  w-[100%] h-[80%] self-center ">
        <div>
          <h1 className="text-4xl font-bold text-white  m-8 justify-center self-center mb-10">
            Videos
          </h1>
        </div>
        <div class="flex justify-around">
          <div className="grid-cols-1  grid md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4 text-white">
              <h2>79rs Bout to Blow</h2>
              <iframe
                style={{ borderRadius: "10px" }}
                width="660"
                height="415"
                src="https://www.youtube.com/embed/KgB2XkRd_fM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                onLoad={handleVideoLoading}
              ></iframe>
            </div>
            <div className="flex flex-col gap-4 text-white">
              <h2>Brand New Day</h2>
              <iframe
                style={{ borderRadius: "10px" }}
                width="660"
                height="415"
                src="https://www.youtube.com/embed/UpUHZfLJy9Y"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="flex flex-col gap-4 text-white">
              <h2>The OnBeat Sessions</h2>
              <iframe
                style={{ borderRadius: "10px" }}
                width="660"
                height="415"
                src="https://www.youtube.com/embed/l_1DAODmn54"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="flex flex-col gap-4 text-white">
              <h2>Stop the Water</h2>
              <iframe
                style={{ borderRadius: "10px" }}
                width="660"
                height="415"
                src="https://www.youtube.com/embed/ZkWLsWtyRug"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white  m-8 justify-center self-center mb-10">
            France
          </h1>
        </div>
        <div class="flex justify-around mb-10">
          <div className="md:grid-cols-2 grid-cols-1 grid gap-7">
            <div className="flex flex-col gap-4 text-white">
              <h2>Live on KEXP (French edition)</h2>

              <iframe
                style={{ borderRadius: "10px" }}
                width="660"
                height="415"
                src="https://www.youtube.com/embed/OTzoyzbuubs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="flex flex-col gap-4 text-white">
              <h2>Trans Musicales de Rennes</h2>
              <iframe
                style={{ borderRadius: "10px" }}
                width="660"
                height="415"
                src="https://www.youtube.com/embed/kb91eYw98Mo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="flex flex-col gap-4 text-white">
              <h2>Fip en Trans</h2>
              <iframe
                style={{ borderRadius: "10px" }}
                width="660"
                height="415"
                src="https://www.youtube.com/embed/kJe4ZWAaTHA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        {!videosLoaded && (
          <div className="absolute w-[100%] h-[100%] bg-gradient-to-b from-[#832388]  to-[#E3436B] flex justify-center   ">
            <div className="animate-spin rounded-full h-32 overflow-hidden w-32 border-t-2 border-b-2 border-yellow-500  mt-[20%] flex absolute"></div>
           <h1 className="  mt-[23%] flex absolute text-white">Loading....</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shows;
