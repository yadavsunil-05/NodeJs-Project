import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>
      <div class="jumbotron main-header-sec" id="jumbotron">
        <div class="jumbotron-txt-container-1">
          <h1 class="display-4">
            ANTIQUE BOOK
            <br />STORE
          </h1>
          <p class="lead">
            We have best ebook offers for you grab the best offer, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.
          </p>
          <a class="banner-btn" href="#products" role="button">Buy Now</a>
        </div>
        <div class="jumbotron-txt-container-2">
          <img src="https://musemaster.net/prebook-html/assets/book-mockup.png" alt="banner" />
        </div>
      </div>
    </div>
  )
}

export default Banner