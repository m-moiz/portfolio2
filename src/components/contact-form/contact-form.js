import React from 'react';
import styled from 'styled-components';
import Button from '../button/button.component';

const StyledForm = styled.form`
	margin-top: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	label {
		font-size: 1.2rem;
		width: 35vw;
		margin-bottom: .9rem;
	}

	input {
		padding-left: 1.2rem;
		width: 35vw;
		height: 2.4rem;
		border: none !important;
		border-bottom: 1px solid #b5b5b5 !important;
		margin-bottom: 2rem;

		:last-child {
			margin-bottom: 5rem;
		}

		&:focus {
			outline: none;
			border-bottom: 1px solid blue !important;
		}
	}

	textarea {
		padding-top: 1rem;
		padding-left: 1.2rem;
		width: 35vw;
		height: 12rem;
		margin-bottom: 2rem;
		border: 1px solid #b5b5b5 !important;
	}

	@media only screen and (max-width: 900px) {
		input {
			width: 60vw;
		}

		textarea {
			width: 60vw;
		}

		label {
			font-size: 1rem;
			width: 60vw;
		}
	}
`;

const ContactForm = () => (
	<StyledForm name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
		<input type="hidden" name="form-name" value="contact" />
		<label>Name</label>
		<input type="text" name="name" placeholder="Your name" />
		<label>Email Address</label>
		<input type="email" name="email" placeholder="Your email" />
		<label>Message</label>
		<textarea name="message" placeholder="Your message" />
		<Button size="small">Submit</Button>
	</StyledForm>
);

export default ContactForm;
