import { useState, useEffect } from 'react';
import { Layout } from '../components/index';
import { Paper } from '@material-ui/core';
import { useRouter } from 'next/router';
const ticketInfo = () => {
	const router = useRouter();

	useEffect(() => {
		if (router.isReady) {
		}
	}, [router.isReady]);
	return (
		<Layout>
			<Paper></Paper>
		</Layout>
	);
};

export default ticketInfo;
