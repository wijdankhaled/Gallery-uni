import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class HornedBeast extends React.Component{
    constructor (props){
        super(props);
        this.state={
            numofliks:0
        }
    }

    
    increaseOfLikes=()=> {
        this.setState({
            numofliks: this.state.numofliks+1
        })
    }

    renderFunction=()=>{
        this.props.popUpTheCard(this.props.title)
    }
    render(){
        return(
        
        <div className="hornd">
        <Card style={{ width: '18rem' }} onClick={this.renderFunction}>
  <Card.Img variant="top" src={this.props.url} />
  <Card.Body>
    {/* <Card.Title>{this.props.url}</Card.Title> */}
    <Card.Text>
    {this.props.pra}
    </Card.Text>
    <Card.Text>
    ❤️ {this.state.numofliks}
    </Card.Text>
    <Button onClick={this.increaseOfLikes}  variant="primary">like </Button>
  </Card.Body>
</Card>
</div>
        )
    }
}
export default HornedBeast;
