
const CardList = (props) => (
	<div>
  	{props.items.map(item => <Card key={item.id} {...item}/>)}
	</div>
);