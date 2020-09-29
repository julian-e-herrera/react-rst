import { Connection } from './request';


class Card extends React.Component {
    
    
    render() {
  	const content = this.props;
  	return (
    	<div className={`card ${content.title}`}>
            <Photo {...Connection.getPhoto} />
            <Comment {...Connection.getComment } />
    	</div>
    );
  }
}


function Photo (props) {
    
    return (
        <div>
            <a href = {this.props.url}>
                <img className = 'fotito' src ={this.props.url}></img>
                <span className='span-title'>{this.props.title}</span>
            </a>

        </div>
    )
}

function Comment(props) {
    return (
        <div>
            <ul>
                <li>{this.props.name}</li>
                <li>{this.props.mail}</li>
                <li>{this.props.body}</li>
            </ul>
        </div>
    )
    
}