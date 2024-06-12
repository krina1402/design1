import React from 'react'

function Footer() {
  return (
   <>
   
   <div className='mainfooter'>
    <div className='footer'>
      <div className='f1'>
        <h2>Vacation rental</h2>
        <p className='fp1'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <h3 className='read'>Read more <i  class="fa-solid fa-greater-than"></i></h3>
      </div>
      <div className='f2'>
        <h2>Services</h2>
        <div className='fp2'>
        <div>Map Direction</div>
        <div> Accomodation Services</div> 
        <div>Great Experience </div> 
        <div>Perfect central location</div>
        </div>
         </div>
       
      <div className='f3'>
        <h2>Tag cloud</h2>
        <div className='fp3'>
        <div>
        <button className='btn1'>APARTMENT</button>
        <button className='btn1'>HOME</button>
        <button className='btn1'>VACATION</button>
        </div>
        <div>
        <button className='btn1'>RENTAL</button>
        <button className='btn1'>RENT</button>
        <button className='btn1'>HOUSE</button>
        <button className='btn1'>PLACE</button>
        </div>
        <button className='btn1'>DRINKS</button>
        </div>
        </div>
      <div className='f4'>
        <h2>Subcribe</h2>
        <div className='fp4'>
        <form className='sub'>
          <input className='enter' type='text' id='fname' name='fname' value="Enter email address" />
          <div className='arrow'><i class="fa-solid fa-arrow-trend-up"></i></div>
        </form>
        </div>
        </div>
        </div>
        <div className='follow'><h2>Follow us</h2></div>
        <div className='ficon'>
       <div> <button className='btn4'><i class="fa-brands fa-twitter"></i></button></div>
        <div><button className='btn5'> <i class="fa-brands fa-facebook-f"></i></button></div>
        <div><button className='btn6'><i class="fa-brands fa-instagram"></i></button></div>
        </div>
    </div>
    <div className='copyright'>
    <div className='c11'>
   <div> Copyright ©2024 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by Colorlib.com</div>
    <div className='aa'>
    <div>Terms</div>
    <div className='aa1'>Privacy</div>
    <div className='aa2'>Compliances</div>
    </div>
    </div>
    </div>
   </>
  )
}

export default Footer
