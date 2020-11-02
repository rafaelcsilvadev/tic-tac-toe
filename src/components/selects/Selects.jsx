import React from 'react';
import { SelectOneSC } from './selectsStyles';

export function SelectOne(props) {
	const arrayOptions = [...props.options];

	return (
		<SelectOneSC
			onChange={props.onChange}
			className={props.className}
			margin={props.margin}>
			{arrayOptions.map((e, index) =>
				index === 0 ? (
					<option key={index} defaultValue>
						{e.text}
					</option>
				) : (
					<option key={index}>{e.text}</option>
				)
			)}
		</SelectOneSC>
	);
}
