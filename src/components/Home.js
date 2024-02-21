import React, { useEffect, useState } from "react";

const client_id = "ce8c2b35447c41c58032f2290ec9f886";
const secret_key = "bf1abf0d231c431aa49af3ed2aba309f";

const Home = () => {
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const authParameter = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        client_id +
        "&client_secret=" +
        secret_key,
    };
    fetch("http://accounts.spotify.com/api/token", authParameter)
      .then((response) => response.json())
      .then((data) => setToken(data.access_token));
  }, []);

  useEffect(() => {
    // Fetch album data
    if (token) {
      const albumId = "7qe36Q1kqxngJMh0AeK246"; // Replace with the album ID or URI
      const headers = {
        Authorization: "Bearer " + token,
      };

      fetch(`https://api.spotify.com/v1/albums/${albumId}`, { headers })
        .then((response) => response.json())
        .then((fetchedData) => {
          setData(fetchedData);
          console.log(fetchedData); // Now logging the fetched data
        });
    }
  }, [token]);

  if (!data) {
    return (
      <div className="home bg-gradient-to-b from-[#832388]  to-[#E3436B]  h-[95vh] flex flex-col justify-center self-center text-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="home bg-gradient-to-b from-[#832388]  to-[#E3436B]  h-[95vh] flex flex-col text-gray-500 text-center relative justify-center">
      <img
        className="lg:w-[50vw] lg:h-[50vh] sm:max-w-[50vw] pt-10 justify-center self-center  animate-custom-pulse my-element"
        src={require("../images/logo.png")}
        alt=""
      />
       <img
    className="absolute w-full h-full object-fill"
    src={require("../images/feathers.png")}
    alt=""
    style={{ top: 0, left: 0 }}
  />
      <div className="mt-8 flex relative justify-center"></div>
    </div>
  );
};

export default Home;
