import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SectionTitle from "../../components/SectionTitle";
import Service from "../../components/service";
import services from '../../data/service'
import ServiceBackground from '../../assets/images/bg/servicebackground2.png'
const PersonalPortfolioService = () => {
    return (
        <div className="bg-grey section service-bg" style={{ backgroundImage: `url(${ServiceBackground})` }}>
            <div className="section-wrap section pt-120 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50 pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
                <Container>
                    <Row>
                        <Col>
                            <SectionTitle
                                title={"My Experience"}
                                content={"“The beautiful thing about learning is nobody can take it away from you.” — B.B. King"}
                            />
                        
                        </Col>
                    </Row>

                    <Row>
                        {services.map(service => (
                            <Col key={service.id} md={6} className={'mb-40 mb-xs-30'}>
                                <Service
                                    title={service.title}
                                    content={service.content}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default PersonalPortfolioService;