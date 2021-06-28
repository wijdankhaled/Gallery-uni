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
    render(){
    
        return(

        //   <div>
        //       <h2>
        //       {this.props.title}
        //       </h2>
        //       <image src={this.props.url}/>
        //       <p>
        //           {this.props.pra}
        //       </p>
        //   </div>
        <>
        <Card style={{ width: '18rem' }}>
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
        </>
        )
    }
}
export default HornedBeast;



