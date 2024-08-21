import React from 'react'
import './bottombar.css'

function BottomBar() {
  return (
    <div>
       <section className='bottom-bar container-fluid'>
        <div className='row bar-items'>
          <div className='col-lg-4 col-md-4'>
            <h6>StreamX.com</h6>
            <p>Contact us</p>
            <p>Career</p>
            <p>Help centre</p>
            <p>FAQ</p>
          </div>
          <div className='col-lg-4 col-md-4'>
            <h6>Learn more</h6>
            <p>Privacy & security</p>
            <p>Terms & conditions</p>
            <p>Customer care</p>
            <p>Accounts</p>
          </div>
          <div className='col-lg-4 col-md-4'>
            <h6>Connect Us With</h6><br />
            <a href="http://www.facebook.com"><i class="fa-brands fa-facebook icon "></i></a>
            <a href="http://www.instagram.com/rns_4_9_"><i class="fa-brands fa-instagram icon"></i></a>
            <a href="http://www.twitter.com"><i class="fa-brands fa-twitter icon"></i></a>
            <a href="http://www.gmail.com"><i class="fa-solid fa-envelope icon"></i></a>
             <h6 className='creater'>Created <br /> by <br /> RNS - 49</h6>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BottomBar
