import React from 'react';

import { Card } from '../components/Card/card';

export const CardList = (props) => (
	<div>
  	{props.items.map(item => <Card key={item.id} {...item}/>)}
	</div>
);