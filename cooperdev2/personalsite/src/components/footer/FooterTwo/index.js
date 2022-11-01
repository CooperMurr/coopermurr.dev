import React from 'react';

const FooterTwo = ({loadHandler, allItems}) => {
    return (
        <div className="footer-section position-fixed section pt-30 pb-30">
            <div className="container-fluid">
                <div className="row align-items-center">

                    <div className="col-lg-4 col-12 d-flex justify-content-center order-lg-2 order-1 mb-sm-15 mb-xs-15">
                        <button
                            className={`load-more-btn ${allItems ? 'disabled' : null}`}
                            onClick={() => {
                                loadHandler()
                            }}
                        >
                            LOAD MORE...
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTwo;
