import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="image related to us"
        />
        <div className="flex flex-col justify-center gap-4 md:w-2/4 texgray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            accusantium in modi eum suscipit fugiat, consequuntur placeat eius
            iure sequi non temporibus similique mollitia sapiente consequatur a
            veniam dicta nihil.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio
            fugit tempore veniam nam mollitia soluta corrupti sit alias,
            incidunt cumque saepe? Aspernatur consectetur at porro ipsum
            expedita, repudiandae facilis.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium hic labore obcaecati aliquid quasi pariatur ullam velit
            aut voluptatibus explicabo quo vero et in tempore, consectetur
            consequatur mollitia magnam enim!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
