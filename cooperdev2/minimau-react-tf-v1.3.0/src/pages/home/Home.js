import React from 'react';

// File imported
import SideHeader from "../../components/SideHeader";
import HeaderTwo from "../../components/header/HeaderTwo";
import ContentHomeBlogPage from "../../templates/home-blog";
import BannerPersonalPortfolio from "../../components/HeroBanner/PersonalPortfolio";
const Home = () => {

    
    
    return (
        <div className={'main-wrapper has-side-header'}>
            <HeaderTwo/>
            <BannerPersonalPortfolio/>
            <SideHeader mobile={false}/>
            <ContentHomeBlogPage/>
        </div>
    );
};

export default Home;
