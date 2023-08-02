import React from 'react';
import { Link } from "react-router-dom";


const PortfolioDetailsContent = ({ title, slug, category, description, meta }) => {
    return (
        <div className="portfolio-details-content">
            <Link to={`/portfolio/${slug}`} className="category">{category}</Link>
            <h1 className="title">{title}</h1>
            <span dangerouslySetInnerHTML={{ __html: description }} />
            <ul className="project-info">
                {(meta.hasOwnProperty('report'))  &&
                <li>
                    <span>Final Report:</span>
                    {meta.report && <a href={"/finalreport/" + meta.report} download="CUSDFinalReport2022">Download PDF</a>}
                </li>
                }
                <li><span>Date:</span> {meta?.date}</li>
                {(!(meta.website === "")) && <li><span>Website:</span>
                    <a href={meta?.website}
                        target="_blank"
                        rel="noopener noreferrer">{meta?.website}
                    </a>
                </li>}
                <li>
                    <span>Tags:</span>
                    {meta?.services.map((service, index) => (
                        <a key={index} href="/">{service}</a>
                    ))}
                </li>

            </ul>

            {(meta.repo) && <div className="project-share">
                <span>Git Repo:</span>
                <a href={`${meta.repo}`}><i className="fa fa-github" /></a>
            </div>}

        </div>
    );
};

export default PortfolioDetailsContent;