import React, { Component } from 'react';

class App extends Component{
	constructor(){
		super();
		this.state={displayBio:true};
	}

	render(){
		const bio=this.state.displayBio ? (
			<div>
				<p>I am ryowu.</p>
				<p>43 year old.</p>
				<p>Live in Tainan.</p>
			</div>
		) : null;

		return (
			<div>
				<h1>Hello!</h1>
				<p>My name is David. I am a software engineer.</p>
				<p>I am always looking forward to working on meaningful projects.</p>
				<div>
					<p>I live in San Francisco, and code every day.</p>
					<p>My favorite language is Javascript</p>
					<p>Besides coding, I also love music and ramen!</p>

					{
						this.state.displayBio ? (
							<div>
								<p>I am ryowu.吳小毛</p>
								<p>43 year old.</p>
								<p>Live in Tainan.</p>
							</div>
						) : null
					}
				</div>
			</div>
		)
	}
}


export default App;
