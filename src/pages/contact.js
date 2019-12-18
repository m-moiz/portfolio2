import React from 'react';
import Layout from '../components/layout/layout';
import Button from '../components/button/button.component';

const Contact = () => (
	<Layout>
		<form>
			<input name="name" placeholder="Your name" />
			<input name="email" placeholder="Your email" />
			<textarea name="message" placeholder="Your message" />
			<Button>Submit</Button>
		</form>
	</Layout>
);

export default Contact;
