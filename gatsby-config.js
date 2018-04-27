module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: 'My simple blog'
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'img',
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'img',
				path: `${__dirname}/static/assets`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-transformer-remark',
		'gatsby-plugin-sharp',
		'gatsby-plugin-netlify-cms'
		],
}
