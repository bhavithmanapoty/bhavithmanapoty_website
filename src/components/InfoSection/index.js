import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, Subtitle, ImgWrap, Img} from './InfoElements'
import image from '../../images/Me.png'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description1, description2, description3, img, alt}) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id={id}>
               <InfoWrapper>
                   <InfoRow imgStart={imgStart}>
                       <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description1}</Subtitle>
                                <Subtitle darkText={darkText}>{description2}</Subtitle>
                                <Subtitle darkText={darkText}>{description3}</Subtitle>
                            </TextWrapper>
                       </Column1>
                       <Column2>
                       <Img className='ILogo' src={image} alt={'Image of Bhavith Manapoty'}/>
                       </Column2>
                   </InfoRow>
               </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection
