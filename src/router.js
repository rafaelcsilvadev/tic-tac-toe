import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Game from './pages/game/Game';
import Players from './pages/players/Players';

function Routes() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={Players} />
					<Route path='/game' exact component={Game} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default Routes;
