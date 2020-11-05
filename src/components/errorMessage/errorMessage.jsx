import React from 'react';
import { MessageSC, BlockMessageSC } from './errorMessageStyles';

export function ErrorMessage(props) {
	return (
		<>
			<BlockMessageSC>
				<MessageSC display={props.display}>{props.text}</MessageSC>
			</BlockMessageSC>
		</>
	);
}
