import React from "react";

export default class RouterSVG extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({ lOn: false })
			if (true) {
				setTimeout(() => {
					this.setState({ lOn: true })
				}, 1000);
			}
		}, 2000);

		setInterval(() => {
			this.setState({ l1: false })
			if (this.props.onIPsCorrect) {
				this.setState({ l1: true })
				setTimeout(() => {
					this.setState({ l1: false })
				}, 300);
				setTimeout(() => {
					this.setState({ l1: true })
				}, 500);
				setTimeout(() => {
					this.setState({ l1: false })
				}, 800);
				setTimeout(() => {
					this.setState({ l1: true })
				}, 1000);
				setTimeout(() => {
					this.setState({ l1: false })
				}, 1200);
				setTimeout(() => {
					this.setState({ l1: true })
				}, 1300);
				setTimeout(() => {
					this.setState({ l1: false })
				}, 1600);
			}
		}, 3000);


	}

	render() {
		let ledOn = this.state.lOn ? '#0d0' : '#070505'
		let led1 = this.state.l1 ? '#0d0' : '#070505'
		let led2 = this.state.l1 ? '#0d0' : '#070505'
return(
		
<svg version="1.1" id="Слой_1" 
	 xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 722.6 101.9"
	 enable-background="new 0 0 722.6 101.9" >
<switch>

	<g >
		<g>
			<path fill="#333333" stroke="#546474" stroke-miterlimit="10" d="M722.6,20.1c0.3-10.7-2.1-17-9.3-20.1
				c-4.2,0.4-8.3,1.2-12.5,1.3C472.9,1.7,245.1,2.1,17.2,2.5c-2,0-4.1,0.2-5.9-0.8c-0.5,0.1-1,0.2-1.6,0.1C8.2,1.7,6.7,1.8,5.2,2
				C1.4,5.9-0.2,11.5,0,19.5c0.5,24.4,0.1,48.8,0.1,73.3c0.1,0.8,0.3,1.6,0.4,2.3c2.9,5.8,7,6.8,11.8,6.8
				c143.7-0.4,287.3-0.6,431-0.9c89.1-0.2,178.3-0.3,267.4-0.4c1.7,0,3.4,0.2,5.1,0.3c5.4-2.7,6.9-8,6.8-15.7
				C722.2,63.4,721.9,41.7,722.6,20.1z M38.8,72.4c-2.4-0.1-4.8-0.2-7.3,0c-2.9,0.2-4.6-0.7-4.6-5.4c0-4.5,1.2-6.1,4.3-5.6
				c1.1,0.2,2.2,0,3.3,0c0,0,0,0,0,0c1.5,0,3,0,4.5,0c2.3,0,4.1,0.9,4,4.7C43,70,42,72.5,38.8,72.4z M81.6,40.2
				c0.1-4.4,1.8-5.2,4.5-4.4c0.9,0.3,1.9,0.3,2.4,0.4c0.9,0,1.5-0.1,2.1,0c2.3,0.5,5.9-1.7,6.1,4c0.2,5.7-3.1,5.4-6,5.4
				c-1.7,0-3.4-0.1-5.1,0C82.8,45.8,81.5,44.2,81.6,40.2z M93.7,70.9c-1.5,0-3,0-4.5,0c-1.7,0-3.4,0-5,0c-1.9,0-2.6-1.6-2.5-4
				c0-2.4,0-4.9,2.4-5.1c3.2-0.2,6.3-0.1,9.5-0.1c2.2-0.1,3.5,1.1,3.5,4.5C97.1,69.3,96.1,70.9,93.7,70.9z M100.7,40.3
				c1.2-7.9,5.9-4.2,9.2-4.8c2.6-0.5,5.6-0.5,5.5,5c-0.2,8.3-5.1,3.3-6.8,4.9c-2.1,0-3.5,0.1-4.8,0
				C101.3,45.3,100.2,43.2,100.7,40.3z M111.7,70.9c-1.3-0.1-2.6,0-3.9,0c0,0,0,0,0-0.1c-1.3,0-2.6,0.1-3.9,0c-2-0.2-3-1.8-3-4.5
				c0-2.8,0.9-4.5,2.9-4.5c2.6-0.1,5.2,0,7.9-0.1c2.3-0.1,4,0.5,4,4.6C115.6,70.1,114.1,71.1,111.7,70.9z M122.7,36.2
				c2.4-0.1,4.9-0.1,7.3-0.1c2.1,0,4.4,0,4.6,3.9c0.2,4.3-2.1,4.9-4.5,4.9c-0.9,0-1.9,0-2.8,0c0,0,0-0.1,0-0.1c-1.5,0-3,0.1-4.5,0
				c-2.1-0.2-2.8-2-2.8-4.7C120,37.7,120.9,36.2,122.7,36.2z M131.6,70.8c-1.3-0.1-2.6,0-3.9,0c-1.7,0-3.4,0.1-5.1,0
				c-2.3-0.1-2.6-2.2-2.6-4.8c0-2.8,0.8-4.4,3-4.4c2.8,0,5.6,0,8.4,0c2.3-0.1,4,0.6,4.1,4.6C135.5,70.3,133.9,70.9,131.6,70.8z
				 M143.2,36.1c1.1,0,2.2,0,3.4,0c0,0,0,0.1,0,0.1c1.5,0,3-0.1,4.5,0c1.8,0.2,2.6,1.8,2.6,4.2c0,2.3-0.7,4.1-2.5,4.3
				c-2.6,0.3-5.2,0.2-7.8,0.3c-2.2,0-4.3-0.7-4.3-4.4C138.9,36.6,141,36.2,143.2,36.1z M149.6,70.8c-1.1-0.1-2.2,0-3.3,0
				c-1.3,0-2.6,0-3.9,0c-2.3,0-3.4-1.3-3.3-4.6c0.1-3.3,1.3-4.5,3.5-4.5c2.4,0,4.8,0,7.2,0c2.2-0.1,4,0.3,4.1,4.3
				C154,70.3,152.2,71,149.6,70.8z M171.1,70.7c-1.3,0-2.6,0-3.9,0c-1.3,0-2.6,0-3.9,0c-2.2,0-3.6-1.3-3.6-4.6
				c0-3.3,1.3-4.6,3.5-4.6c2.6,0,5.2,0,7.9,0c2.1,0,3.8,0.5,3.9,4.1C175,69.3,173.6,70.8,171.1,70.7z M401.7,31.8
				c-0.3,11.9,0,23.8,0,35.7c0,10.4,0,10.4-7.4,10.4c-31.2,0-62.4,0.1-93.6,0.1c-31.4,0-62.8,0-94.2,0.3c-4.8,0-6.6-1.5-6.4-8.6
				c0.4-12.4,0.4-24.9,0-37.3c-0.2-6.8,1.1-8.8,6.2-8.8c31.6,0.3,63.2,0.1,94.7,0c0,0,0,0,0,0c31.6-0.1,63.2,0,94.7-0.3
				C400.4,23.4,401.8,25.3,401.7,31.8z M636.4,77.6c-31.8-0.2-63.5,0-95.3,0v0c-31.4,0.1-62.8,0-94.1,0.3c-5.2,0.1-6.8-1.9-6.6-9.1
				c0.4-12.9,0.2-25.9,0-38.8c-0.1-5.1,1.2-6.7,4.8-6.7c64.1,0,128.1-0.1,192.2-0.4c3.5,0,4.6,1.6,4.5,6.3
				c-0.2,13.5-0.3,26.9,0.1,40.4C642.2,75.8,640.9,77.6,636.4,77.6z"/>
			<path fill="#949596" stroke="#546474" stroke-miterlimit="10" d="M300.9,23.8c31.6-0.1,63.2,0,94.7-0.3c4.7,0,6.2,1.9,6,8.3
				c-0.3,11.9,0,23.8,0,35.7c0,10.4,0,10.4-7.4,10.4c-31.2,0-62.4,0.1-93.6,0.1c-31.4,0-62.8,0-94.2,0.3c-4.8,0-6.6-1.5-6.4-8.6
				c0.4-12.4,0.4-24.9,0-37.3c-0.2-6.8,1.1-8.8,6.2-8.8C237.8,24,269.4,23.8,300.9,23.8C300.9,23.7,300.9,23.8,300.9,23.8z
				 M275.6,74c5.6,0,11.2-0.2,16.9,0c2.7,0.1,3.6-1.1,3.6-4.9c-0.2-7.7-0.2-15.5,0-23.2c0.1-4.5-0.5-7-4.2-6.3
				c-2.5,0.5-3.9-1.1-3.9-4.8c0-1.3-0.6-2-1.2-3c-3.7-5.5-8.4-4.8-13.1-5.1c-5.3-0.3-8.1,3.8-9.8,9.7c-0.6,2.1-1.4,3.4-2.7,3.1
				c-6.4-1.4-5.8,4.3-5.7,9.9c0.1,6.4,0.2,12.9,0,19.4c-0.1,4.1,1,5.4,3.9,5.2C264.7,73.9,270.2,74,275.6,74z M373.8,73.9
				C373.8,73.9,373.8,73.8,373.8,73.9c5.4,0,10.9-0.2,16.3,0c2.7,0.1,4.2-0.6,4-5c-0.2-8-0.2-16-0.1-24c0.1-3.5-0.7-5.4-3.5-5.1
				c-2.7,0.3-4.1-0.8-5-5.2c-0.6-3.1-3.6-6.6-5.9-7.5c-8.4-3.3-14.6,0.7-18.5,10.8c-0.5,1.3-1.1,2.3-2.1,2
				c-7.1-1.9-5.6,5.1-5.6,10.4c0,5.7,0.2,11.4,0,17c-0.2,4.9,0.8,7,4.6,6.7C363.2,73.6,368.5,73.9,373.8,73.9z M226.4,74.1
				C226.4,74.1,226.4,74.1,226.4,74.1c5.4,0,10.9-0.2,16.3,0.1c3.3,0.2,4.7-1.1,4.5-6c-0.3-7.5-0.1-15-0.1-22.5c0-1.7,0.4-5-0.7-4.8
				c-5.2,0.7-7.1-4.3-10-8.6c-1.1-1.6-0.9-4-2.5-5.1c-5.5-3.7-16.7,1.8-19.4,9.7c-0.5,1.5-1.1,3.6-2.7,3.2c-5.7-1.4-5.3,3.7-5.2,8.9
				c0.1,5.9,0.3,11.9,0,17.8c-0.3,5.6,0.7,8,5.2,7.5C216.6,73.7,221.5,74.1,226.4,74.1z M324.7,74c5.1,0,10.2-0.3,15.2,0.1
				c3.8,0.3,5.4-1.2,5.2-6.9c-0.3-7-0.4-14,0-21c0.2-5.2-1.1-7.1-4.8-6.5c-1.2,0.2-3.5,0.3-3.3-1.5c0.4-4.8-2.2-6-4-8.4
				c-1.9-2.5-14-4.5-15.9-2c-3.5,4.7-4.8,13-11.5,12.4c-1.1-0.1-0.9,3.1-0.9,4.8c0,7.8,0.2,15.5,0,23.3c-0.1,4.6,1.2,5.8,4.3,5.7
				C314.2,73.8,319.4,74,324.7,74z"/>
			<path fill="#949596" stroke="#546474" stroke-miterlimit="10" d="M541.2,77.7c-31.4,0.1-62.8,0-94.1,0.3
				c-5.2,0.1-6.8-1.9-6.6-9.1c0.4-12.9,0.2-25.9,0-38.8c-0.1-5.1,1.2-6.7,4.8-6.7c64.1,0,128.1-0.1,192.2-0.4c3.5,0,4.6,1.6,4.5,6.3
				c-0.2,13.5-0.3,26.9,0.1,40.4c0.1,6.1-1.1,7.9-5.6,7.9C604.7,77.4,572.9,77.6,541.2,77.7C541.2,77.6,541.2,77.7,541.2,77.7z
				 M614.9,73.9c5.3,0,10.5-0.4,15.8,0.1c4.1,0.4,5.1-1.8,4.9-7.1c-0.3-7-0.3-14-0.1-21c0.1-4.6-0.4-7.6-4.5-6.7
				c-1.8,0.4-2.9-1-3.7-3.6c-1.8-5.4-4.6-9.5-9.5-9.2c-2.6,0.1-5.3,0-7.9,0c-1.7,0-2.6,0.8-4.1,3c-2,3.1-2.5,9.4-6,9.4
				c-5.7-0.1-5.1,4.5-5,9.5c0.1,6.2,0.4,12.5,0,18.6c-0.4,6.2,1.4,7.5,5.4,7.1C605.1,73.6,610,73.9,614.9,73.9z M517.2,74
				C517.2,74,517.2,74,517.2,74c5.4,0,10.9-0.1,16.3,0.1c2.8,0.1,4.1-0.8,4-5.1c-0.2-8-0.2-16,0-24c0.1-4.1-0.9-5.5-3.9-5.3
				c-1.6,0.1-4.5,1.5-4.2-2.8c0.5-6.5-5.3-9.6-5.9-9.6c-5.6-0.1-12-4-16.6,3.4c-2.6,4.2-3.8,10.7-9.4,9.5c-1-0.2-0.7,2.6-0.7,4.1
				c0,8.3,0.1,16.5,0,24.8c-0.1,3.7,0.8,5,3.5,4.9C505.9,73.9,511.6,74,517.2,74z M468,74.1C468,74.1,468,74.1,468,74.1
				c5.5,0,10.9-0.1,16.4,0.1c2.9,0.1,4.5-0.7,4.4-5.5c-0.3-8-0.2-16.1-0.1-24.1c0.1-3.7-0.9-5.1-3.6-5c-2.7,0.1-4.5-0.1-5.4-5.3
				c-0.6-3.2-3.4-8.3-7.7-7.6c-2.6,0.4-5.3-0.1-7.9,0.1c-3.9,0.3-6.3,4.3-7.8,8.4c-1.2,3.3-2.1,5.5-5,4.9c-2.4-0.5-3.3,1-3.3,4.4
				c0.1,8.3,0.2,16.6,0.1,24.9c-0.1,3.7,0.8,5.1,3.5,4.9C457,74,462.5,74.1,468,74.1z M566.1,74c5.6,0,11.3-0.1,16.9,0
				c2.2,0,3.6-0.5,3.6-4.1c-0.1-8.8-0.1-17.6-0.1-26.4c0-2-0.4-3.8-2.1-3.6c-3.9,0.4-5.1-1.5-7.1-7c-3.4-9.6-17.9-8.6-22.2-1.7
				c-0.5,0.9-1,2.4-0.9,3.5c0.5,5.1-1.8,5.6-4.5,5.2c-3-0.4-3.9,1.4-3.8,5.4c0.2,7.8,0.2,15.5,0,23.3c-0.1,4.6,1.2,5.8,4.3,5.6
				C555.6,73.8,560.8,74,566.1,74z"/>
			<path fill={ledOn} stroke="#546474" stroke-miterlimit="10" d="M31.7,61.5c1.5,0,3,0,4.5,0c2.3,0,4.1,0.9,4,4.7
				c0,3.9-1.1,6.4-4.3,6.2c-2.4-0.1-4.8-0.2-7.3,0c-2.9,0.2-4.6-0.7-4.6-5.4c0-4.5,1.2-6.1,4.3-5.6C29.5,61.6,30.6,61.4,31.7,61.5
				C31.7,61.4,31.7,61.5,31.7,61.5z"/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M105.6,45.5c-2.1,0-3.5,0.1-4.8,0c-2.4-0.1-3.5-2.2-3.1-5.2
				c1.2-7.9,5.9-4.2,9.2-4.8c2.6-0.5,5.6-0.5,5.5,5C112.2,48.8,107.3,43.9,105.6,45.5z"/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M124.8,70.8c-1.7,0-3.4,0.1-5.1,0c-2.3-0.1-2.6-2.2-2.6-4.8
				c0-2.8,0.8-4.4,3-4.4c2.8,0,5.6,0,8.4,0c2.3-0.1,4,0.6,4.1,4.6c0.1,4.1-1.5,4.7-3.9,4.6C127.4,70.8,126.1,70.8,124.8,70.8z"/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M86.4,70.9c-1.7,0-3.4,0-5,0c-1.9,0-2.6-1.6-2.5-4
				c0-2.4,0-4.9,2.4-5.1c3.2-0.2,6.3-0.1,9.5-0.1c2.2-0.1,3.5,1.1,3.5,4.5c0,3.2-1,4.8-3.3,4.8C89.4,70.9,87.9,70.9,86.4,70.9z"/>
			<path fill={led1} stroke="#546474" stroke-miterlimit="10" d="M85.7,36.2c0.9,0,1.5-0.1,2.1,0c2.3,0.5,5.9-1.7,6.1,4
				c0.2,5.7-3.1,5.4-6,5.4c-1.7,0-3.4-0.1-5.1,0c-2.8,0.2-4.2-1.4-4.1-5.4c0.1-4.4,1.8-5.2,4.5-4.4C84.1,36,85.1,36.1,85.7,36.2z"/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M164.3,70.8c-1.3,0-2.6,0-3.9,0c-2.2,0-3.6-1.3-3.6-4.6
				c0-3.3,1.3-4.6,3.5-4.6c2.6,0,5.2,0,7.9,0c2.1,0,3.8,0.5,3.9,4.1c0.1,3.7-1.3,5.1-3.8,5.1C167,70.8,165.6,70.8,164.3,70.8z"/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M143.4,70.8c-1.3,0-2.6,0-3.9,0c-2.3,0-3.4-1.3-3.3-4.6
				c0.1-3.3,1.3-4.5,3.5-4.5c2.4,0,4.8,0,7.2,0c2.2-0.1,4,0.3,4.1,4.3c0.1,4.4-1.7,5.1-4.3,4.9C145.7,70.8,144.5,70.8,143.4,70.8z"
				/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M104.9,70.9c-1.3,0-2.6,0.1-3.9,0c-2-0.2-3-1.8-3-4.5
				c0-2.8,0.9-4.5,2.9-4.5c2.6-0.1,5.2,0,7.9-0.1c2.3-0.1,4,0.5,4,4.6c0,3.9-1.5,4.9-3.9,4.7C107.5,70.9,106.2,70.9,104.9,70.9
				C104.9,70.9,104.9,70.9,104.9,70.9z"/>
			<path fill={led2} stroke="#546474" stroke-miterlimit="10" d="M143.7,36.2c1.5,0,3-0.1,4.5,0c1.8,0.2,2.6,1.8,2.6,4.2
				c0,2.3-0.7,4.1-2.5,4.3c-2.6,0.3-5.2,0.2-7.8,0.3c-2.2,0-4.3-0.7-4.3-4.4c-0.1-3.9,2.1-4.3,4.2-4.4
				C141.4,36.1,142.6,36.1,143.7,36.2C143.7,36.1,143.7,36.2,143.7,36.2z"/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M124.4,44.9c-1.5,0-3,0.1-4.5,0c-2.1-0.2-2.8-2-2.8-4.7
				c0-2.4,1-3.9,2.7-4c2.4-0.1,4.9-0.1,7.3-0.1c2.1,0,4.4,0,4.6,3.9c0.2,4.3-2.1,4.9-4.5,4.9C126.2,44.9,125.3,44.9,124.4,44.9
				C124.4,44.9,124.4,44.9,124.4,44.9z"/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M272.7,74c-5.4,0-10.9-0.1-16.3,0.1c-2.9,0.1-4-1.1-3.9-5.2
				c0.2-6.4,0.2-12.9,0-19.4c-0.1-5.6-0.7-11.3,5.7-9.9c1.3,0.3,2.1-1,2.7-3.1c1.7-6,4.4-10,9.8-9.7c4.7,0.3,9.4-0.5,13.1,5.1
				c0.7,1,1.3,1.7,1.2,3c-0.1,3.7,1.3,5.3,3.9,4.8c3.7-0.7,4.4,1.8,4.2,6.3c-0.2,7.7-0.1,15.5,0,23.2c0.1,3.7-0.9,5-3.6,4.9
				C284,73.9,278.4,74,272.7,74z"/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M373.8,73.9c-5.3,0-10.5-0.3-15.8,0.1c-3.8,0.3-4.8-1.7-4.6-6.7
				c0.3-5.7,0-11.4,0-17c0-5.3-1.5-12.3,5.6-10.4c1,0.3,1.6-0.7,2.1-2c3.9-10.1,10.1-14.1,18.5-10.8c2.4,0.9,5.3,4.4,5.9,7.5
				c0.9,4.4,2.2,5.5,5,5.2c2.8-0.3,3.5,1.5,3.5,5.1c-0.1,8-0.2,16,0.1,24c0.1,4.4-1.4,5.1-4,5C384.6,73.7,379.2,73.8,373.8,73.9
				C373.8,73.8,373.8,73.9,373.8,73.9z"/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M223.5,74.1c-4.9,0-9.8-0.4-14.6,0.2c-4.4,0.5-5.5-1.9-5.2-7.5
				c0.3-5.9,0.1-11.9,0-17.8c-0.1-5.1-0.5-10.2,5.2-8.9c1.7,0.4,2.2-1.7,2.7-3.2c2.7-7.9,13.8-13.5,19.4-9.7
				c1.6,1.1,1.4,3.5,2.5,5.1c2.9,4.3,4.7,9.4,10,8.6c1.1-0.2,0.7,3.1,0.7,4.8c0.1,7.5-0.2,15,0.1,22.5c0.2,4.9-1.2,6.2-4.5,6
				C234.4,73.9,229,74.2,223.5,74.1C223.5,74.2,223.5,74.1,223.5,74.1z"/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M321.8,74c-5.3,0-10.5-0.1-15.8,0.1c-3.1,0.1-4.4-1.1-4.3-5.7
				c0.2-7.8,0-15.5,0-23.3c0-1.8-0.3-4.9,0.9-4.8c6.7,0.6,8-7.8,11.5-12.4c1.9-2.5,14-0.6,15.9,2c1.9,2.4,4.4,3.6,4,8.4
				c-0.1,1.9,2.1,1.8,3.3,1.5c3.7-0.6,5,1.3,4.8,6.5c-0.3,7-0.3,14,0,21c0.3,5.6-1.3,7.2-5.2,6.9C332,73.7,326.9,74,321.8,74z"/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M614.9,73.9c-4.9,0-9.8-0.3-14.6,0.1c-4,0.4-5.8-0.9-5.4-7.1
				c0.4-6.2,0.1-12.4,0-18.6c-0.1-5-0.7-9.6,5-9.5c3.4,0,3.9-6.3,6-9.4c1.4-2.2,2.3-2.9,4.1-3c2.6-0.1,5.3,0.1,7.9,0
				c4.9-0.3,7.7,3.8,9.5,9.2c0.9,2.6,1.9,4,3.7,3.6c4.1-0.8,4.6,2.1,4.5,6.7c-0.2,7-0.3,14,0.1,21c0.2,5.2-0.8,7.4-4.9,7.1
				C625.5,73.6,620.2,73.9,614.9,73.9z"/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M517.2,74c-5.6,0-11.2-0.1-16.9,0.1c-2.7,0.1-3.6-1.3-3.5-4.9
				c0.1-8.3,0-16.5,0-24.8c0-1.5-0.3-4.3,0.7-4.1c5.7,1.2,6.8-5.3,9.4-9.5c4.6-7.4,11-3.5,16.6-3.4c0.6,0,6.4,3.1,5.9,9.6
				c-0.3,4.2,2.6,2.9,4.2,2.8c2.9-0.2,3.9,1.2,3.9,5.3c-0.2,8-0.2,16,0,24c0.1,4.3-1.2,5.2-4,5.1C528,73.9,522.6,74,517.2,74
				C517.2,74,517.2,74,517.2,74z"/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M468,74.1c-5.5,0-10.9-0.1-16.4,0.1c-2.7,0.1-3.6-1.3-3.5-4.9
				c0.1-8.3,0.1-16.6-0.1-24.9c-0.1-3.4,0.9-4.9,3.3-4.4c2.9,0.6,3.8-1.6,5-4.9c1.5-4.1,3.9-8,7.8-8.4c2.6-0.2,5.3,0.3,7.9-0.1
				c4.3-0.6,7.2,4.4,7.7,7.6c0.9,5.2,2.7,5.4,5.4,5.3c2.6-0.1,3.6,1.3,3.6,5c-0.2,8-0.2,16.1,0.1,24.1c0.2,4.8-1.4,5.6-4.4,5.5
				C478.9,74,473.4,74.1,468,74.1C468,74.1,468,74.1,468,74.1z"/>
			<path fill="#070505" stroke="#546474" stroke-miterlimit="10" d="M566.1,74c-5.3,0-10.5-0.2-15.8,0.1c-3.1,0.2-4.4-1-4.3-5.6
				c0.2-7.8,0.2-15.5,0-23.3c-0.1-4,0.9-5.8,3.8-5.4c2.7,0.4,4.9-0.1,4.5-5.2c-0.1-1.1,0.3-2.6,0.9-3.5c4.2-6.9,18.8-7.9,22.2,1.7
				c2,5.5,3.1,7.4,7.1,7c1.7-0.2,2.1,1.6,2.1,3.6c0,8.8,0,17.6,0.1,26.4c0,3.6-1.4,4.2-3.6,4.1C577.4,73.9,571.7,74,566.1,74z"/>
		</g>
	</g>
</switch>

</svg>
)}}
