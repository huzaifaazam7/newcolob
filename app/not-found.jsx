import React from 'react'
import Link from 'next/link'


export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3xl'>There is Problem Here</h2>
        <p>we could Not Find The page</p>
         <br />
        {/* <p>Go Back To The Home page!<Link href="/">Home</Link></p> */}
 <Link href="/">
<div class="toggle-wrapper">
  {/* <input class="toggle-checkbox" type="checkbox"> */}
  <div class="toggle-container">  
    <div class="toggle-button">
      <div class="toggle-button-circles-container">
        <div class="toggle-button-circle"></div>
        <div class="toggle-button-circle"></div>
        <div class="toggle-button-circle"></div>
        <div class="toggle-button-circle"></div>
        <div class="toggle-button-circle"></div>
        <div class="toggle-button-circle"></div>
        <div class="toggle-button-circle"></div>
        <div class="toggle-button-circle"></div>
        <div class="toggle-button-circle"></div>
        <div class="toggle-button-circle"></div>
        <div class="toggle-button-circle"></div>
        <div class="toggle-button-circle"></div>
      </div>
    </div>
  </div>
</div>
</Link>       
    </main>
  )
}
