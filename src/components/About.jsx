import React from 'react'

const About = () => {
  return (
    <div name="about"
    className="w-full md:h-screen  bg-gradient-to-b from-sky-800 to-black text-white">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full md:h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-sky-500">
                About
            </p>
        </div>
        <p className="text-xl mt-10 md:text-justify">
        I possess a proficient skill set in front-end development, with a focus on React, Bootstrap, HTML, and CSS. Over the past two years, I have gained valuable experience working with these technologies, allowing me to confidently and effectively develop responsive and visually appealing user interfaces.
        </p>
        
        <br />
        
        <p className="text-xl">
        As a creative at heart, I've always been drawn to the worlds of movies, travelling, and video editing. There's something about the way these three pursuits intersect that ignites my passion and keeps me constantly inspired.
        </p>
    </div>
    </div>
  )
}

export default About