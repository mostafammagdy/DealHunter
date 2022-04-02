import React from 'react'
import MyAccountButttonManage from '../components/MyAccountButttonManage'
import searching from '../assets/searching.jpg'
import accountIcon from '../assets/AccountIcon2.jpg'
import review from '../assets/review.jpg'
import checkout from '../assets/checkout.jpg'

export default function MyAccount() {
  

  const handleClick = {
    onClick: ()=>{console.log("account has been clicked my friend")}, 
    linkTo:"/checkout"


  }


  
    

  

  return (
      <>
    <div>Your Account</div>
    <MyAccountButttonManage Column1Header = "Your Orders" Column1Description = "Track, Return, or View Status"
                            Column2Header = "Account Management" Column2Description = "View, Manage or Edit Account Information" 
                            Column1Image = {searching} Column2Image = {accountIcon}
                            Column2OnClick = {handleClick.onClick} Column2LinkTo={handleClick.linkTo}/>
    <MyAccountButttonManage  Column1Header = "Reviews" Column1Description = "Check your review on Items"
                            Column2Header = "Checkout" Column2Description = "Ready to Pay?"
                            Column1Image = {review} Column2Image = {checkout}
                            Column2OnClick = {handleClick.onClick} Column2LinkTo={handleClick.linkTo}/>
    </>
  )



}
