import React,{Fragment} from 'react';
// ServiceBackground
import ServiceLight from '../../assets/images/bg/experiencebackground2.jpg'
import ServiceDark from '../../assets/images/bg/experiencebackground.jpg'
const ServiceBackground = ({sideHeader}) => {
    return (
        <Fragment>
            <img src={ServiceDark} alt="logo"/>
            <img src={ServiceLight} className="experiencebackground2" alt="logo"/>
        </Fragment>
    );
};

export default ServiceBackground;
