import React from 'react';
import Icon1 from '../../images/saveTime.svg';
import Icon2 from '../../images/doubleWork.svg';
import Icon3 from '../../images/pronosticShedule.svg';
import { ServicesContainer, ServicesTitle, ServicesWrapper, ServicesCard, ServicesIcon, ServicesSubTitle, ServicesDesc } from './ServicesElements'

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesTitle>
                    Our Services
                </ServicesTitle>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesSubTitle>Save your TIME</ServicesSubTitle>
                        <ServicesDesc>We helped to reduce the time wasted in your workday.</ServicesDesc>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesSubTitle>Do not work double</ServicesSubTitle>
                        <ServicesDesc>Follow the order given to avoid doing the same task.</ServicesDesc>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesSubTitle>Prognosticate your schedule</ServicesSubTitle>
                        <ServicesDesc>We calculated the necessary time to complete your tasks.</ServicesDesc>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
