import React from "react";

const About = () => {
  return (
    <div className="about bg-gradient-to-b from-[#832388]  to-[#E3336B]  h-[95vh] flex flex-col  items-center relative ">
      {/* <img
        className="lg:w-[30vw] lg:h-[30vh]  top-[30%]  absolute "
        src={require("../images/logo_green.png")}
        alt=""
      /> */}

      <div className="  flex self-center justify-center flex-col  quicksand font-light text-gray-200  h-[70vh]  lg:w-[60vw] lg:h-[90vh] rounded-lg  m-auto  md:p-4  absolute backdrop-blur-[2px] ">
        <h3 className=" fade font-aboreto font-light justify-left max-w-fit lg:text-[20px] mb-4 tracking-[6px]  text-left uppercase p-2 animate-fade-in  ">
          Our Story
        </h3>
        <p className="p-2  md:text-[12px]  lg:text-[18px] text-[16px] sm:text-[10px] pt-3 ">
          The <strong> 79rs Gang</strong>, is a remarkable musical collaboration
          that transcends boundaries and celebrates cultural heritage. It brings
          together Big Chief Romeo Bougere from the 9th Ward and Big Chief
          Jermaine Bossier from the 7th Ward, two chiefs who have united their
          voices to create extraordinary music that speaks to the soul.The band
          originated in 2013 when Romeo and Jermaine put aside their territorial
          differences for their common love for music and desire to celebrate
          their shared culture. This led them to release the traditional Mardi
          Gras Indian music album titled "Fire On The Bayou" in 2013, which
          resonated deeply with their community.
        </p>
        <p className="p-2  lg:text-[18px] text-[16px] sm:text-[10px]  ">
          Today, with the collaboration of the talented writer and producer Eric
          Heigle, renowned for his work with acclaimed artists such as Arcade
          Fire, The Soul Rebels, and Lost Bayou Ramblers, alongside an
          incredible band, Jermaine and Romeo embark on a musical journey like
          no other. This exceptional ensemble weaves together modern sonorities
          and rhythms from New Orleans and various parts of the world, creating
          a unique fusion that resonates with audiences far and wide. They
          incorporate elements of jazz, funk, soul, and blues, paying homage to
          the city's rich musical heritage. Additionally, the band members bring
          their own cultural backgrounds into the mix, introducing rhythms and
          melodies from different parts of the world, enriching the music with
          global flavors.
        </p>
        <p className="p-2  lg:text-[18px] text-[16px] sm:text-[10px]  ">
          From dance floors to block parties, the irresistible beats of the 79rs
          Gang's music transcend geographical boundaries, inviting people from
          all walks of life to join in the celebration. Their music is a
          testament to the power of collaboration, bridging gaps and fostering a
          sense of togetherness. Check around to discover the captivating
          journey of the 79rs Gang, as they honor past heroes, celebrate the art
          of sewing, and showcase the vibrant tapestry of their unique culture.
        </p>
      </div>
    </div>
  );
};

export default About;
