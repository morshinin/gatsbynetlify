import React from 'react';

export default class PostPage extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props
		return (
			<div>
				<span>{data.markdownRemark.frontmatter.date}</span>
				<h1>{data.markdownRemark.frontmatter.title}</h1>
				<p>{data.markdownRemark.excerpt}</p>
				<div dangerouslySetInnerHTML={{
					__html: data.markdownRemark.html
				}} />
			</div>
		);
	}
}

export const query = graphql`
	query BlogPostQuery($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug}}) {
		  html
		  frontmatter {
		  	title
		  	date(formatString: "DD.MM.YYYY")
		  }
		}
	}
`