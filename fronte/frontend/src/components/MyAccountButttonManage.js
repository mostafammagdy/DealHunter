import React from 'react'
import '../styles/MyAccountButtonManage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export default function MyAccountButttonManage(props) {
  return (
    <div className='row justify-content-center'>
     
      <div className='Box col-4'>
        <div className='innerBox'>
          <img src= {props.Column1Image}></img>
        
          <h1 className='boxHeader'>{props.Column1Header}{"\n"}</h1>
  
          <p className='boxParagraph'>{props.Column1Description}</p>
         
        </div>
      </div>
    
       <Link style ={{textDecoration:"none",color:"black"}} to="/checkout">
      <div className='Box col-4'  onClick={props.Column2OnClick}>
        <div className='innerBox'>
        <img src= {props.Column2Image}></img>
          <h1 className='boxHeader'>{props.Column2Header}{"\n"}</h1>
  
          <p className='boxParagraph'>{props.Column2Description}</p>
         
        </div>
      </div>
      </Link>
    </div>
  
  )







}
