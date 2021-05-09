import React from 'react'
import Icon1 from '../../images/Touche.png'
import Icon2 from '../../images/AutoTrashLogo.png'
import Icon3 from '../../images/Edi Test Logo.png'
import {PortfolioContainer, PortfolioH1, PortfolioWrapper, PortfolioCard, PortfolioIcon, PortfolioH2, PortfolioP} from './PortfolioElements'

const Portfolio = () => {
    return (
        <PortfolioContainer id='portfolio'>
            <PortfolioH1>My Portfolio</PortfolioH1>
            <PortfolioWrapper>
                
                <PortfolioCard href="//www.youtube.com/watch?v=vhNcPfZL0sw" target="_blank" aria-label="Touche Tracker YouTube">
                    <PortfolioIcon src={Icon1}/>
                    <PortfolioH2>Touché Tracker</PortfolioH2>
                    <PortfolioP>Custom designed Fencing Scoring Machine</PortfolioP>
                </PortfolioCard>              
                <PortfolioCard   href="//www.youtube.com/watch?v=aWEO5gxiFt8" target="_blank" aria-label="AutoTrash YouTube">
                    <PortfolioIcon src={Icon2}/>
                    <PortfolioH2>AutoTrash</PortfolioH2>
                    <PortfolioP>AutoTrash is a smart dustbin that can segregate waste automatically using image recognition.</PortfolioP>
                </PortfolioCard>
                <PortfolioCard href="//play.google.com/store/apps/details?id=com.edi.edinpuritytest&hl=en&gl=gb" target="_blank" aria-label="Edinburgh Purity Test">
                    <PortfolioIcon src={Icon3}/>
                    <PortfolioH2>Edinburgh Purity Test</PortfolioH2>
                    <PortfolioP>Remake of the famous Rice Purity Test to help students bond at University.</PortfolioP>
                </PortfolioCard>
            </PortfolioWrapper>
        </PortfolioContainer>
    )
}

export default Portfolio
