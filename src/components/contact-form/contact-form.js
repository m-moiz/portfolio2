import React from 'react';
import styled from 'styled-components';
import Button from '../button/button.component';

const StyledForm = styled.form`
	margin-top: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	input {
		width: 35vw;
		height: 2rem;
		border: none !important;
		border-bottom: 1px solid black !important;
		margin-bottom: 2rem;

		&:focus {
			outline: none;
			border-bottom: 1px solid blue !important;
		}
	}

	textarea {
		width: 35vw;
		height: 8rem;
		margin-bottom: 2rem;
	}

	@media only screen and (max-width: 900px) {
		input {
			width: 50vw;
		}

		textarea {
			width: 50vw;
		}
	}
`;

const ContactForm = () => (
	<StyledForm name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
		<input type="hidden" name="form-name" value="contact" />
		<input type="text" name="name" placeholder="Your name" />
		<input type="email" name="email" placeholder="Your email" />
		<textarea name="message" placeholder="Your message" />
		<Button>Submit</Button>
	</StyledForm>
);

export default ContactForm;
