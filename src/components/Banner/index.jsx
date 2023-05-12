import React from "react";
import "./Banner.css";

import BannerImage from "../../assets/banner.png";

const Banner = () => {
    return (
        <header className="banner">
            <img src={BannerImage} alt="Imagem Banner" />
        </header>
    );
};

export default Banner;
