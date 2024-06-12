import React from 'react'

function Navbar() {
  return (
    <>
    <div className='box'>
    <div className='box1'>
    <div>
      <img className='boxa' src='./box1.PNG'/>
    </div>
    <div className='boxb'><h2>Map Direction</h2></div>
    <div className='boxc'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</div>
    <div>
      <button className='boxd'>READ MORE</button>
    </div>
    </div>

    <div className='box1'>
    <div>
      <img className='boxa' src='./box2.PNG'/>
    </div>
    <div className='boxb'><h2>Accomodation Services</h2></div>
    <div className='boxc'>
    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
    </div>
    <div>
    <button className='boxd'>READ MORE</button>
    </div>
    </div>

    <div className='box1'>
    <div>
    <img className='boxa' src='./box3.PNG'/>
    </div>
    <div className='boxb'><h2>Great Experience</h2></div>
    <div className='boxc'>
    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
    </div>
    <div>
    <button className='boxd'>READ MORE</button>
    </div>
    </div>
    </div>

    <div className='room'>
      <div className='rooma'>Apartment Room</div>
      <div className='maindiv'>
        
        <div className='roomm1'>
          <img  className='r1' src='./room1.PNG'/>
        </div>
        <div className='room1'>
          <div className='star'><i  class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
          <div className='tbl1'>Suite Room</div>
          <div className='per'>
          <div><b className='b'>Max:</b>3 person</div>
       <div><b className='b'>Size:</b>45 m2</div>
       <div><b className='b'>View:</b>sea view</div>
       <div><b className='b'>Bed:</b>1</div>
          </div>
          <div>
            <button className='tblbtn'>View Room Details</button>
          </div>
        </div>
        
        <div className='room1'>
        <img  className='r2' src='./room2.PNG'/>
        </div>
        <div className='room1'>
        <div className='star'><i  class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
        <div className='tbl1' >Standard Room</div>
        <div className='per'>
        <div><b className='b'>Max:</b>3 person</div>
       <div><b className='b'>Size:</b>45 m2</div>
       <div><b className='b'>View:</b>sea view</div>
       <div><b className='b'>Bed:</b>1</div>
        </div>
        <div>
        <button className='tblbtn'>View Room Details</button>
        </div>
        </div>
      </div>
      <div className='maindiv2'>
        <div className='room2'>
        <div className='star'><i  class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
        <div className='tbl1' >Family Room</div>
        <div className='per'> 
        <div><b className='b'>Max:</b>3 person</div>
       <div><b className='b'>Size:</b>45 m2</div>
       <div><b className='b'>View:</b>sea view</div>
       <div><b className='b'>Bed:</b>1</div>
        </div>
        <div>
        <button className='tblbtn'>View Room Details</button>
        </div>
        </div>
        <div  className='room2'>
        <img  className='r3' src='./room3.PNG'/>
        </div>
        <div  className='room2'>
        <div className='star'><i  class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
        <div className='tbl1' >Deluxe Room</div>
        <div className='per'>
       <div><b className='b'>Max:</b>3 person</div>
       <div><b className='b'>Size:</b>45 m2</div>
       <div><b className='b'>View:</b>sea view</div>
       <div><b className='b'>Bed:</b>1</div>
        </div>
        <div>
        <button className='tblbtn'>View Room Details</button>
        </div>
        </div>
        <div  className='room2'>
        <img  className='r4' src='./room4.PNG'/>
        </div>
      </div>

      <div>
        <div className='happy'>Happy Clients & Feedbacks</div>
        <div className='clients'>
          <div>
            <img/>
          </div>
          <div>
            <p></p>
          </div>
          <div></div>
        </div>
      </div>
 </div>
 </>
  )
}

export default Navbar
