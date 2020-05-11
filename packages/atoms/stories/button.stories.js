import React from 'react';
import Button from 'components/button';
import Select from 'components/select';
import ButtonSelect from 'components/buttonSelect';

export default {
	title: '@abl/Basic components',
	component: {
		Button,
		Select,
		ButtonSelect,
	},
};

export const button = () => <Button text='hello world'/>;
export const select = () => (
	<Select>
		<option name='value1'>value1</option>
		<option name='value2'>value2</option>
		<option name='value3'>value3</option>
	</Select>
);
export const buttonSelect = () => <ButtonSelect></ButtonSelect>;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
