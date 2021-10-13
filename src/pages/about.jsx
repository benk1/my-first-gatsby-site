import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

function about(props) {
	return (
		<Layout pageTitle="About Me">
			<p>
				Hi there! Iam the proud creator of this site,which i built with Gatsby.
			</p>
		</Layout>
	);
}

export default about;
