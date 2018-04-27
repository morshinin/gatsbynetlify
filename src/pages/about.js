import React from 'react';

export default class About extends React.Component {
	static propTypes = {
		name: React.PropTypes.string,
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>About Us</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, consequuntur voluptas quia est odio unde. Voluptatum eligendi vitae rem eius veritatis ea architecto tempore, dolor culpa quas deserunt minima, optio inventore corporis ullam nihil, qui commodi beatae provident hic aut!
				</p>
			</div>
		);
	}
}

