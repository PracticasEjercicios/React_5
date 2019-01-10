import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';

const Header = (props) =>
(
	<div>
		<Navbar left>
			<li>
				<Link to="/">
					<Icon>comment</Icon>
				</Link>
			</li>
			<li>
				<Link to="/usuarios">
					<Icon>account_circle</Icon>
				</Link>
			</li>
		</Navbar>
	</div>
);

export default Header;