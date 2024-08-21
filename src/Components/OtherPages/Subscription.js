import React from 'react'

function subscription() {
  return (
    <div>
      <section className='sub container-fluid'>
        <h1>Subscription Plans</h1>
        <div className='row'>
        <div className='col-lg-4 main'>
           <div className='cards'>
            <div className='card-body'>
              <h3>Regional</h3>
              <p>Get access to regional movies, TV shows and more</p>
              <h1>Starts from 199/-</h1>
              <button className='btn btn-warning'>Subscribe</button>
            </div>
           </div>
        </div>

        <div className='col-lg-4 main'>
           <div className='cards'>
            <div className='card-body'>
              <h3>National</h3>
              <p>Get access to national movies, TV shows and more</p>
              <h1>Starts from 499/-</h1>
              <button className='btn btn-warning'>Subscribe</button>
            </div>
           </div>
        </div>

        <div className='col-lg-4 main'>
           <div className='cards'>
            <div className='card-body'>
           <h3>International</h3>
           <p>Get access to all around movies, TV shows and more</p>
              <h1>Starts from 999/-</h1>
              <button className='btn btn-warning'>Subscribe</button>
            </div>
           </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default subscription
