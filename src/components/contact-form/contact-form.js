import React from 'react';
import styled from 'styled-components';
import Button from '../button/button.component';

const StyledSpan = styled.span`
	width: 100%;
	display: flex;
	font-size: 1.6rem;
	align-items: center;
	justify-content: center;
	background-color: #3e8bbd;
	height: 60px;
	color: white;
`;

const Border = styled.div`
	width: 100%;
	height: 5px;
	background-color: #b137f5;
`;

const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 4rem;

	@media screen and (max-width: 660px) {
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 2rem;
	}
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
`;

const StyledForm = styled.form`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 60%;
	background: #404040;
	bottom: 12rem;

	input,
	select {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		width: 100%;
	}

	label {
		font-size: 1.2rem;
		letter-spacing: .02rem;
		color: white;
		width: 100%;
		margin-bottom: .9rem;
	}

	input {
		padding-left: 1.2rem;
		height: 2.4rem;
		border: none !important;

		&:focus {
			outline: none;
			border-bottom: 1px solid blue !important;
		}
	}

	textarea {
		padding-top: 1rem;
		padding-left: 1.2rem;
		width: 100%;
		height: 12rem;
		border: 1px solid #b5b5b5 !important;
	}

	@media only screen and (max-width: 900px) {
		width: 90%;

		input {
			width: 100%;
		}

		textarea {
			width: 100%;
		}

		label {
			font-size: 1rem;
			width: 100%;
		}
	}
`;

const ContactForm = () => (
	<StyledForm name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
		<StyledSpan>Contact</StyledSpan>
		<InputWrapper>
			<input type="hidden" name="form-name" value="contact" />
			<label htmlFor="name">Name</label>
			<InputContainer>
				<input type="text" name="name" id="name" placeholder="Your name" />
				<Border />
			</InputContainer>

			<label htmlFor="email">Email Address</label>
			<InputContainer>
				<input type="email" name="email" id="email" placeholder="Your email" />
				<Border />
			</InputContainer>
			<label htmlFor="message">Message</label>
			<InputContainer>
				<textarea name="message" id="message" placeholder="Your message" />
				<Border />
			</InputContainer>
		</InputWrapper>
		<Button position="relative" bottom="3rem" size="small">
			Submit
		</Button>
	</StyledForm>
);

export default ContactForm;
