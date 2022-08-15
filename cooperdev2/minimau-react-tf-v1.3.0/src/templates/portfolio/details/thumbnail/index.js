import React from 'react';
import PropTypes from "prop-types";
import ReactPlayer from 'react-player'
const PortfolioDetailsThumb = ({images, title, videoURL}) => {
    return (
        <div className="portfolio-details-image mb-sm-30 mb-xs-30">
            {images && images.map((image, index) => (
                <img key={index} src={require('../../../../assets/images/portfolio/' + image)} alt={title}/>
            ))}
            {videoURL && <ReactPlayer playing url={`${videoURL}`} />}
        </div>
        
    );
};

PortfolioDetailsThumb.propsType = {
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default PortfolioDetailsThumb;