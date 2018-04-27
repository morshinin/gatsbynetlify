import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'


const IndexPage = ({data}) => (
  <div>
    <h1>Posts</h1>
    {data.allMarkdownRemark.edges.map(({node}) => {
    	return <PostListing key={node.id} post={node} />
    })}
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
  	allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
  	  edges {
  	    node {
  	    	id
  	      frontmatter {
  	        title
  	        date(formatString: "DD.MM.YYYY")
  	      }
  	      html
  	      excerpt(pruneLength: 200)
  	      fields {
  	      	slug
  	      }
  	    }
  	  }
  	}
  }
`