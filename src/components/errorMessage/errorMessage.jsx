import React from 'react';
import { Message, BlockMessage } from './errorMessageStyles';

export function ErrorMessage(props) {
	return (
		<>
			<BlockMessage>
				<Message color={props.color}>{props.text}</Message>
			</BlockMessage>
		</>
	);
}
