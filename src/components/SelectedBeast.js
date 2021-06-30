import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
class SelectedBeast extends React.Component{
    render(){
        return(
            <>
             <Modal show={this.props.shown} >
        <Modal.Header closeButton>
          {this.props.selectedCard.title}
        </Modal.Header>
        <Modal.Body>
            <img src={this.props.selectedCard.image_url}alt='' style={{width:"450px",height:"400px"}}></img>
            <p>{this.props.selectedCard.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handeleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
            </>
        )
    }
    
  
    }
    export default SelectedBeast;