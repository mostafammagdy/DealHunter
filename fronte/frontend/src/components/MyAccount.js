import React from 'react'
import MyAccountButttonManage from './MyAccountButttonManage'
import searching from './searching.jpg'
import accountIcon from './AccountIcon2.jpg'
import review from './review.jpg'
import checkout from './checkout.jpg'

export default function MyAccount() {


  return (
      <>
    <div>Your Account</div>
    <MyAccountButttonManage Column1Header = "Your Orders" Column1Description = "Track, Return, or View Status"
                            Column2Header = "Account Management" Column2Description = "View, Manage or Edit Account Information" 
                            Column1Image = {searching} Column2Image = {accountIcon}/>
    <MyAccountButttonManage  Column1Header = "Reviews" Column1Description = "Check your review on Items"
                            Column2Header = "Checkout" Column2Description = "Ready to Pay?"
                            Column1Image = {review} Column2Image = {checkout}/>
    </>
  )



}
