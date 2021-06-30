import React from 'react';
import HornedBeats from './HornedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import horn from './Data.json';

class Main extends React.Component {

  funForm=(event)=>{
let numHorn= event.target.value;
//
let hornfilter;
let data =horn;
if (numHorn){
hornfilter= data.filter(item=>{
    if (item.horns == numHorn){
        return item;
    }

})


}
else {
    hornfilter=data;
}
this.props.renderfilter(hornfilter);
  }

    render() {
        return (
            // <div>
            //     <HornedBeats title={'UniWha'} pra={'A unicorn and a narwhal nuzzling their horns'} url={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'}/>
            //     <HornedBeats title={'Rhino Family'} pra={'Mother (or father) rhino with two babies'} url={'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80'}/>
            //     <HornedBeats title={'Unicorn Head'} pra={'Someone wearing a creepy unicorn head mask'}url={'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg'}/>
            // </div>

            <>
               <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Choose the number of horne</Form.Label>
                        <Form.Control as="select" onChange ={this.funForm}> 
                        <option value=''>All</option>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                        <option value='100'>Wow</option>
                        </Form.Control>
            
                    </Form.Group>
                </Form>


                {
                    this.props.Data.map((item, index) => {
                        return (
                            <HornedBeats title={item.title} pra={item.description} url={item.image_url} key={index} popUpTheCard={this.props.popUpTheCard} />
                        )
                    })
                }


            </>
        )
    }

}
export default Main;