import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Pointer from './Pointer';
import {
	POINTER_HEIGHT,
	SLIDER_HEIGHT,
	pixelToValue,
	valueToPixel,
	buildTicks,
} from './utils';

const style = `
	.slider {
		display: flex;
		height: ${SLIDER_HEIGHT}px;
		position:relative;
		width: 40px;
		margin: auto;
		justify-content: space-between;
	}
	.slider:focus {
		outline: 1px dashed black;
		padding: 0 5px;
	}
	.section {
		flex: 1 1 35%;
		display: flex;
		justify-content: space-between;
		margin: ${POINTER_HEIGHT / 2}px 0; 
	}
	.bar{
		height: 100%;
		flex-basis: 47%;
		background-color: black;
	}
	.scale{
		width: 5px;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		margin: ${POINTER_HEIGHT / 2}px 0; 
	}
	.tick {
		margin-left: 2px;
		height: 1px;
		background: black;
	}
	.tick.short{
		width: 60%;
	}
	.tick.long{
		width: 100%;
	}
	.number{
		flex-direction: column;
		font-size: 10px;
		line-height: 10px;
		font-family: helvetica;
		text-align: end;
	}
`;

const Slider = ({
	min,
	max,
	value,
	nbrTick,
	measures,
	onChange,
	lazy,
	...props
}) => {
	const ticks = ((nbr) =>
		buildTicks(nbr).map((el, i) => (
			<div key={i} className={`tick ${el}`}></div>
		)))(nbrTick);

	const measuresList = measures.map((el, i) => <div key={i}>{el}</div>);

	const [pointerVal, setPointerVal] = useState(
		valueToPixel(value, SLIDER_HEIGHT - POINTER_HEIGHT, max)
	);
	const [isPressed, setIsPressed] = useState(false);
	const [sliderValue, setSliderValue] = useState(value);

	const updateCusor = (evt) => {
		if (isPressed) {
			const posY = evt.clientY - evt.currentTarget.offsetTop;
			if (posY <= evt.currentTarget.clientHeight - POINTER_HEIGHT) {
				setPointerVal(posY);
			}
		}
	};
	useEffect(() => {
		let value = pixelToValue(pointerVal, SLIDER_HEIGHT - POINTER_HEIGHT, max);
		if (value < min) value = min;
		if (value > max) value = max;
		setSliderValue(value);
	}, [pointerVal]);

	return (
		<React.Fragment>
			<style>{style}</style>
			<div
				onMouseDown={() => setIsPressed(true)}
				onMouseUp={(evt) => {
					evt.persist();
					updateCusor(evt);
					setIsPressed(false);
					onChange && onChange(sliderValue);
				}}
				onMouseMove={(evt) => {
					evt.persist();
					updateCusor(evt);
					onChange && isPressed && !lazy && onChange(`${sliderValue}`);
				}}
				onMouseLeave={() => {
					if (isPressed) {
						setIsPressed(false);
						onChange && onChange(sliderValue);
					}
				}}
				role="slider"
				tabIndex="0"
				className="slider"
				aria-label="slider"
				aria-valuenow={sliderValue}
				aria-valuemin={min}
				aria-valuemax={max}
				{...props}
			>
				<div className="section">
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
				<div className="scale">
					<Pointer top={pointerVal} />
					{ticks}
				</div>
				<div className="section number">{measuresList}</div>
			</div>
		</React.Fragment>
	);
};

Slider.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number,
	value: PropTypes.number,
	nbrTick: PropTypes.number,
	onChange: PropTypes.func, // callback function returning slider value
	measures: PropTypes.array, // values list displayed on the slider
	lazy: PropTypes.bool, // if true, trigger onChange hanlder only when mouse release OR leaves
};
Slider.defaultProps = {
	min: 0,
	max: 100,
	value: 90,
	nbrTick: 5,
	measures: [100, 0],
	lazy: undefined,
	onChange: () => {},
};

export default Slider;
