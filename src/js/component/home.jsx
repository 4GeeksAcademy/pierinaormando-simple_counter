import React from 'react';

function Counter(props) {
	return (
		<div className="container text-center">
			<div className="icono"><i className="far fa-clock"></i></div>
			<div className="six">{props.secondSix}</div>
			<div className="five">{props.secondFive}</div>
			<div className="four">{props.secondFour}</div>
			<div className="three">{props.secondThree}</div>
			<div className="two">{props.secondTwo}</div>
			<div className="one">{props.secondOne}</div>
		</div>
	);
};

export default Counter

