import React from 'react'
import styled from "styled-components"
import video from "../../assets/videos/hero-video.mp4"
import Button from "../styled/Button"

const HomeHero = () => {
    return (
        <HeroSection>
            <HeroBg> 
                <Video src={video} type="video/mp4" autoPlay loop muted playsInline/>
            </HeroBg>
            <HeroContent>
                <HeroText> i<SpanText>meme</SpanText>DB </HeroText>
                <HeroSubText>Your everyday source of memes</HeroSubText>
                <HeroForm> 
                    <HeroInput type="text" placeholder="search memes here..."/>
                    <StyledButton>Search</StyledButton>
                </HeroForm>
            </HeroContent>
        </HeroSection>
    )
}

const HeroSection = styled.section`
    height: 100vh;
    width: 100%;
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:-80px;
    padding-top:80px;
    background: black;
    color:white;

    &::before{
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        bottom:0;
        right:0;
        z-index:2;
        background: linear-gradient( 180deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,.75) 100%),linear-gradient( 180deg, rgba(0,0,0,.2) 0%, transparent 100%)
    }

`
const HeroBg = styled.div`
    height: 100vh;
    width: 100%;
    position: absolute;
    top:0;
    left:0;
`
const Video = styled.video`
    height: 100%;
    width: 100%;
    object-fit:cover;
`
const HeroContent = styled.div`
    z-index:2;
    width: 70%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 767px){
        width:90%;
    }
`

const HeroText = styled.h1`
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    margin-bottom: 1rem;
    letter-spacing: 10px;
    text-align: center;
    font-weight: 900;
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
`
const SpanText = styled.span`
    color: rgb(245, 197, 24);
    letter-spacing: 7px;
`
const HeroSubText = styled.p`
    font-size: clamp(.7rem, 5vw, 1.5rem);
    margin-bottom: 1rem;
    text-align: center;
    color:rgba(255, 255, 255, 0.7);
`

const HeroForm = styled.div`
    width: 100%;
    border-radius: 50px;
    display:flex;
    justify-content:space-between;
    background:white;
`

const HeroInput = styled.input`
    flex-grow:1;
    padding: 5px 16px;
    border:none;
    outline:none;
    font-size: 1rem;
    color:black;
    background:transparent;
`
const StyledButton = styled(Button)`
    border-top-right-radius:50px;
    border-bottom-right-radius:50px;
    
    &:hover {
        transform: unset;
        background: seablue;
    }
`

export default HomeHero;
