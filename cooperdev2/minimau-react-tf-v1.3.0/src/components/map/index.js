import React from 'react';

const Map = ({ text, lat, long }) => {
    return (
        <div className="row">
            <div className="col-lg-10 col-12 mb-45">
                <div className="contact-availability">
                    <h3>Where I Am Right Now</h3>
                    <p>{text}</p>
                </div>
            </div>
            <div className="col-lg-10 col-12">
                <div id="contact-map">
                    <iframe src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAIonwnRE_l4IM9-oWTD9WJ5PHedD4Z2a8&q=Brooklyn, New+York, NY&center=${lat}, ${long}&zoom=11`}
                     width="100%" 
                     height="100%" 
                     style={{border:"0"}} 
                     allowfullscreen=""
                     loading="lazy" 
                     referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Map;