import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
	display: flex;
	padding: 4rem;
	height: 600px;
	justify-content: center;
	width: 100%;

	@media screen and (max-width: 660px) {
		padding-left: 1.7rem;
		padding-right: 1.7rem;
		padding-top: 2rem;
	}
`;

const FormWrapper = styled.div`width: 500px;`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 2rem;
`;

const StyledForm = styled.form`
	position: relative;
	background: rgb(43, 43, 43);
	background: linear-gradient(180deg, rgb(43, 43, 43) 0%, rgb(0, 0, 0) 100%);
	width: 100%;

	input,
	select {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		width: 100%;
	}

	label {
		font-size: 1rem;
		width: 100%;
		letter-spacing: 0.02rem;
		color: white;
	}

	input {
		width: 195%;
		padding-left: .7rem;
		background-color: transparent;
		border-top: none;
		border-left: none;
		border-right: none;
		border-bottom: 1px solid white;
		align-self: center;
		color: white;

		&:focus {
			outline: none;
			border-bottom: 1px solid blue !important;
		}
	}

	textarea {
		padding-top: 1rem;
		padding-left: .7rem;
		margin-top: 1.2rem;
		width: 195%;
		height: 12rem;
		margin-top: 1rem;
		border: 1px solid #b5b5b5 !important;
	}
`;

const SubmitButton = styled.button`
	width: 100%;
	padding: .6rem;
	background: #000;
	border: 1px solid #0da8ff;
	color: white;
	border-radius: .5rem;
	margin-top: 1.5rem;
	transition: background .35s ease-in, border .35s ease-in;

	&:hover {
		background: #3835ff;
		border: 1px solid #69ff79;
		cursor: pointer;
	}
`;

const StyledH3 = styled.div`
	text-align: center;
	margin-top: 2.5rem;
	font-size: 1.4rem;
	color: white;
`;

const ContactForm = () => (
	<StyledForm name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
		<StyledH3>Contact</StyledH3>
		<InputWrapper>
			<FormWrapper>
				<input type="hidden" name="form-name" value="contact" />
				<InputContainer>
					<label htmlFor="name">Name</label>
					<input type="text" name="name" id="name" />
				</InputContainer>
				<InputContainer>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" />
				</InputContainer>
				<InputContainer>
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" />
				</InputContainer>
				<SubmitButton>Submit</SubmitButton>
			</FormWrapper>
		</InputWrapper>
	</StyledForm>
);

export default ContactForm;
