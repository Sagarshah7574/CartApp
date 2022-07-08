import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Form } from 'react-bootstrap';



function HomeIcon() {
    const [data, setData] = useState(Cardsdata);
   
    const[copydata,setCopydata]=useState([])
    
    // console.log(copydata );
  
    const dispatch = useDispatch();
  
    const chanegData = (e) => {
      // console.log(e);
      let getchangedata = e.toLowerCase();
  
      if (getchangedata === "") {
        setCopydata(Cardsdata);
      } else {
          let storedata = copydata.filter((element, k) => {
              return element.rname.toLowerCase().match(getchangedata);
          });
  
             setCopydata(storedata)
            //  console.log(storedata);
      }
  }
    
    
    const send = (e)=>{
      // console.log(e);
      dispatch(ADD(e));
  
    }
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
      
    useEffect(() => {
      setCopydata(data);
      
  }, [data])
  
    return (
      <div className='container mt-3'>
        
        <h2 className='text-center' style={{color:"red"}}>FoodCart</h2><br/>
  
        <Form className='d-flex justify-content-center align-items-center mt-3'>
                  <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
  
                      <Form.Control type="text"
                          onChange={(e) => chanegData(e.target.value)}
                          placeholder="Search Restaurant" />
                  </Form.Group>
                  <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}>Submit</button>
              </Form>
        
        <div className="row d-flex justify-content-center align-items-center">
          {copydata &&copydata.length ?        
        <Slider {...settings} >
          {
             copydata.map((element,k) => {
              return (
                 
                
                  <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style" >
                    
                    <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                    <Card.Body >
                      
                       
                   
                      <Card.Title >{element.rname}</Card.Title>
                  
                      <Card.Text>
                      Price : ₹ {element.price}
                      </Card.Text>
                      <div className="button_div d-flex justify-content-center">
                      <Button variant="primary"  
                        onClick={()=> send(element)}
                       className='col-lg-12'>Add to Cart</Button>
                      </div>
                    
                    </Card.Body>
      
               </Card  > 
              
                
                  
              
              )
            })
  }
      </Slider >
      :''}    
      </div>
      </div>
    )
}

export default HomeIcon