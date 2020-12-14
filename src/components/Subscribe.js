import React from "react"
import styled from "styled-components"
import Button from "./styled/Button"

const Subscribe = () => {
    return(
        <>
        	<SubscribeSection>
	        	<SubscribeSectionWrapper>
	        		<SubscribeHeader>Random memes are always the best</SubscribeHeader>
	        		<SubscribeSubHeader>Join our mail list and get your daily random memes</SubscribeSubHeader>
	        		<Form>
	        			<FormInput type="text" placeholder="Enter your email address" />
	        			<FormButton round={true}>SUBSCRIBE</FormButton>
	        		</Form>
	        	</SubscribeSectionWrapper>
        	</SubscribeSection>
        </>
    )
}

const SubscribeSection = styled.section`
	width: 100%;
	background:lightblue;
`

const SubscribeSectionWrapper = styled.div`
	max-width: 1440px;
	padding: 6rem 10%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const SubscribeHeader = styled.h2`
	font-size: clamp(1.5rem, 5vw, 3.5rem);
	text-align: center;
    margin-bottom: .8rem;
    color: #57606f;
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
`
const SubscribeSubHeader = styled.p`
	font-size: clamp(1rem, 5vw, 1.5rem);
	text-align: center;
    margin-bottom: 1.5rem;
    font-family: "Roboto", sans-serif;
    font-weight:400;
    color: #747d8c;
`
const Form = styled.form`
	width: 100%;
	max-width: 500px;
`
const FormInput = styled.input`
	width: 100%;
	border-radius: 50px;
	border:none;
	outline:none;
	padding: 14px 16px;
	font-size: 1.1rem;
	color: #57606f;
	margin-bottom: 1rem;
	background: #fff;
	text-align: center;
`
const FormButton = styled(Button)`
	width: 100%;
	padding: 14px 16px;
	background: #eccc68;
	letter-spacing: 3px;
	font-weight: 500;
	font-family:"Montserrat", sans-serif;
`

export default Subscribe;