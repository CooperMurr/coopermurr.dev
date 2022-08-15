import React, {Fragment} from 'react';
import Switcher from "./components/Switcher";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

/*
* @ Component Imported
* */
/* import TeamPage from "./pages/team"; */
import AboutPage from "./pages/about";
import ErrorPage from "./pages/404Error";
import ContactPage from "./pages/contact";
/* import ServicePage from "./pages/service"; */
import Home from "./pages/home/Home";
/* import HomeDefault from "./pages/home/HomeDefault"; */
import BlogDetailsPage from "./pages/blog/BlogDetails";
/* import HomeFiveColumn from './pages/home/HomeFiveColumn';
import HomeFourColumn from "./pages/home/HomeFourColumn";
import BlogThreeColumnPage from "./pages/blog/ThreeColumn";
import HomeThreeColumn from "./pages/home/HomeThreeColumn"; */
import PortfolioDetailsPage from "./pages/portfolio/details";
import HomePersonalPortfolio from "./pages/home/HomePersonalPortfolio";
import HomeFreelancerPortfolio from "./pages/home/HomeFreelancerPortfolio";
import PortfolioGridTwoColumnPage from "./pages/portfolio/grid/two-column";
import BlogTwoColumnLeftSidebarPage from "./pages/blog/TwoColumnLeftSidebar";
import PortfolioGridFourColumnPage from "./pages/portfolio/grid/four-column";
import PortfolioGridThreeColumnPage from "./pages/portfolio/grid/three-column";
import BlogTwoColumnRightSidebarPage from "./pages/blog/TwoColumnRightSidebar"; 
import PortfolioMasonryTwoColumnPage from "./pages/portfolio/masonry/two-column";
/* import PortfolioMasonryFourColumnPage from "./pages/portfolio/masonry/four-column";
import PortfolioMasonryThreeColumnPage from "./pages/portfolio/masonry/three-column";
import PortfolioGridFourColumnFullWidthPage from "./pages/portfolio/grid/four-column-fullwidth";
import PortfolioGridFiveColumnFullWidthPage from "./pages/portfolio/grid/five-column-fullwidth";
import PortfolioGridThreeColumnFullWidthPage from "./pages/portfolio/grid/three-column-fullwidth";
import PortfolioMasonryFourColumnFullWidthPage from "./pages/portfolio/masonry/four-column-fullwidth";
import PortfolioMasonryFiveColumnFullWidthPage from "./pages/portfolio/masonry/five-column-fullwidth";
import PortfolioMasonryThreeColumnFullWidthPage from "./pages/portfolio/masonry/three-column-fullwidth"; */

const App = () => {
    return (
        <Fragment>
            <Switcher/>
            <Router>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/contact"}`}
                           component={ContactPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog/:slug"}`}
                           component={BlogDetailsPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio/:slug"}`}
                           component={PortfolioDetailsPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio"}`}
                           component={PortfolioGridTwoColumnPage}/>
                    <Route path={`${process.env.PUBLIC_URL + "/about"}`}
                           component={AboutPage}/>
                    <Route exact path={`${process.env.PUBLIC_URL + "/"}`}
                           component={HomePersonalPortfolio}
                    />
                    <Route exact component={ErrorPage}/>
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;