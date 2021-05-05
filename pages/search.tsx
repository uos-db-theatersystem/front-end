import React from 'react';
import { Layout } from '../components/index';
import { TextField, IconButton, List, ListItem, Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const search = () => {
	return (
		<Layout>
			<div className="search-container">
				<div className="search-header">
					<TextField className="search-input" label="Movie title" variant="outlined" />
					<IconButton aria-label="search">
						<SearchIcon fontSize="large" />
					</IconButton>
				</div>
				<List className="search-list" style={{ padding: '0 0' }} component="nav">
					<ListItem button>
						<p>콩 vs 고질라</p>
					</ListItem>
					<Divider />
					<ListItem button>
						<p>콩 vs 고질라</p>
					</ListItem>
					<Divider />
					<ListItem button>
						<p>콩 vs 고질라</p>
					</ListItem>
					<Divider />
					<ListItem button>
						<p>콩 vs 고질라</p>
					</ListItem>
					<Divider />
					<ListItem button>
						<p>콩 vs 고질라</p>
					</ListItem>
					<Divider />
					<ListItem button>
						<p>콩 vs 고질라</p>
					</ListItem>
					<Divider />
				</List>
			</div>
		</Layout>
	);
};

export default search;
