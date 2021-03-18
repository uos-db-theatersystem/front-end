import Layout from '../components/Layout';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { nameState } from '../components/states';
import React from 'react';

const About = () => {
	const [name, setNameState] = useRecoilState(nameState);

	const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNameState(e.target.value);
	};

	return (
		<Layout>
			<h1>Profile</h1>
			<p>Hello, {name}</p>

			<input
				type="text"
				name="name"
				id="input_name"
				onChange={updateName}
				placeholder="Enter your name"
			/>

			<Link href="/">Back to main</Link>
		</Layout>
	);
};

export default About;
