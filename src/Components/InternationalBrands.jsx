import React from "react";

import Marquee from "react-fast-marquee";

const InternationalBrands = () => {
  const brands = [
    { imgURL: require("../assets/Disel.png") },
    { imgURL: require("../assets/burberry.png") },
    { imgURL: require("../assets/gucci.png") },
    { imgURL: require("../assets/persol.jpg") },
    { imgURL: require("../assets/Prada.png") },
    { imgURL: require("../assets/Versace.png") },
    { imgURL: require("../assets/tomford.jpg") },
    { imgURL: require("../assets/DG.webp") },
    { imgURL: require("../assets/EA.webp") },
    { imgURL: require("../assets/rayban.webp") },
    { imgURL: require("../assets/TH.webp") }
  ];

  function Card(props) {
    return (
      <div>
        <img className="md:h-20 h-6 md:mx-6 mx-2" src={props.img} alt="brand" />
      </div>
    );
  }

  return (
    <div className="md:my-10 my-8 z-10">
      <div id="InternationalBrands">
        <Marquee speed={50} gradient={false}>
          <div className="flex">
            {brands.map((brand) => (
              <Card img={brand.imgURL} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default InternationalBrands;
