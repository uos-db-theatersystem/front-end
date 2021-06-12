import { useState, useEffect } from 'react';
import { Layout } from '../../components/index';
import { discountProps } from '../../utils/interface';
import { discountApi } from '../../utils/api';
import { List, ListItem, Divider, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
const discounts = () => {
	const [discounts, setDiscounts] = useState<discountProps[]>([]);
	useEffect(() => {
		(async () => {
			try {
				setDiscounts(await discountApi.getDiscounts());
			} catch (e) {
				throw new Error(e);
			}
		})();
	}, []);
	const handleClick = async (e: any) => {
		const { name, dataset } = e.target.closest('button');

		if (name === 'delete') {
			try {
				await discountApi.patchDiscounts(Number(dataset.id));
				setDiscounts(
					discounts.filter((discount) => discount.discount_num !== Number(dataset.id))
				);
			} catch (e) {
				throw new Error(e);
			}
		}
	};
	return (
		<Layout>
			<h1 style={{ textAlign: 'center' }}>할인 목록</h1>
			<List
				className="search-list"
				style={{ padding: '0 0' }}
				component="nav"
				onClick={handleClick}
			>
				{discounts.map((discount) => (
					<div key={discount.discount_num}>
						<ListItem>
							<div>
								<p style={{ margin: '0 0' }}>{discount.discount_name}</p>
							</div>
							<div style={{ marginLeft: 'auto' }}>
								<IconButton name="delete" data-id={discount.discount_num}>
									<Close />
								</IconButton>
							</div>
						</ListItem>
						<Divider />
					</div>
				))}
			</List>
		</Layout>
	);
};

export default discounts;
