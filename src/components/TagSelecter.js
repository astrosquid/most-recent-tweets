import React from 'react';

class TagSelector extends React.Component {

	render() {
		return (
			<form className="tag-selector" onSubmit={(e) => this.goToReveal(e)}>
				<h2>Enter a hashtag you'd like to track:</h2>
				<p>@</p><input type="text" required placeholder="javascript, React, Facebook" />
			</form>
		)
	}
}