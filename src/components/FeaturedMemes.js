import React from "react"
import styled from "styled-components"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"

const FeaturedMemes = () => {

  const data = useStaticQuery(graphql`
    query {
      images : allFile {
        edges {
          node {
            id
            base
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    `)

    console.log(data.images.edges[0].node);
  return (
    <FeaturedMemesSection>
      <SectionHeader> Featured memes </SectionHeader>

      <ImagesWrapper>
        {
          data.images.edges.map( (image, index) => (
            <StyledImg
              key={image.node.id}
              title={image.node.base?.split(".")[0]} 
              alt={image.node.base?.split(".")[0]} 
              fluid={image.node.childImageSharp?.fluid}
              objectFit="contain"
            />
          ))
        }
      </ImagesWrapper>
    </FeaturedMemesSection>
  )
}


const FeaturedMemesSection = styled.section`
    padding: 6rem 10%;
    max-width: 1440px;
    min-height: 100vh;
    background: #f1f2f6;
`
const SectionHeader = styled.h2`
    font-size: clamp(1.5rem, 5vw, 3.5rem);
    line-height: 1;
    text-align: center;
    margin-bottom: 60px;
    color: rgb(245, 197, 24);
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
`

const ImagesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media screen and (max-width:767px){
      flex-direction: column;
      align-items: center;
    }
`


const StyledImg = styled(Img)`
  width: calc(33.33% - 1rem);
  height: 45vh;
  margin:.5rem;
  box-shadow: 0 8px 6px -6px black;
  border-radius: 5px;

    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(9),
    &:nth-child(10),
    &:nth-child(14),
    &:nth-child(15){
      width: calc(50% - 1rem);
      height: 45vh;
    }


  &:hover{
    transform: scale(1.05);
    transition: all 0.6s ease !important;
    cursor: pointer;
  }
  
  @media screen and (max-width: 767px){
    width: 100% !important;
    height: auto;
  }
`


export default FeaturedMemes
