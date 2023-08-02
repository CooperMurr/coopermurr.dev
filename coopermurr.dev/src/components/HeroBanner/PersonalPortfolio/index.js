import React, { useState } from 'react';
import HeroBannerContainer from "../../../container/HeroBanner";
import bannerBg from '../../../assets/images/hero/temp-hero.jpg';
import pdf from '../../../assets/images/portfolio/resume.pdf';
import personalInfo from '../../../data/personalInfo'
import Popup from 'reactjs-popup';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import 'reactjs-popup/dist/index.css';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const BannerPersonalPortfolio = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const contentStyle = { background: '#4a2c2a', width:870};
    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
    const arrowStyle = { color: '#4a2c2a' };


    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <HeroBannerContainer bg={bannerBg} overlay={false}>
            <div className="main-slider-content">
                <h2>Hello , I’m</h2>
                <h1>{personalInfo.name}</h1>
                <h2>{personalInfo.designation}</h2>
                <Popup trigger={<a className="main-slider-content">View Resume</a>} position="right center" {...{ contentStyle, overlayStyle, arrowStyle }}>
                    <div>
                        <p>
                            Page {pageNumber} of {numPages}

                            <Button className="Button" href={`${process.env.PUBLIC_URL + personalInfo.resumeURL}`} sx={{
                                width: 190,
                                color: '4a2c2a',
                            }} variant="text" size="large" endIcon={<DownloadIcon />} >
                                Download
                            </Button>
                        </p>
                        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber} scale={1.4} />
                        </Document>

                    </div>
                </Popup>
            </div>
        </HeroBannerContainer>
    );
};

export default BannerPersonalPortfolio;