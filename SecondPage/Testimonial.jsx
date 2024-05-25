import React from 'react'
import './Testimonial.css'
import logo from './image/img-1.png'
import { FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <>
     <div id='header'>
    <div className='container-fluid '>
      <div className='row  '>
        <div className='col-sm-1'></div>
        <div className='col-sm-5 app'>
      <h3 className='list-1 '>KitKat Software Technology holds the Highly Professional Corporate Training programs on IT Software, Project Management, Soft skills and Agile Development.</h3>
      <p className='list-2'>We emphasize on delivering expert-level corporate training programs that are tailored
to suit the requirements for our clients. We carry out in-depth knowledge and
widespread experience in the latest technology throughout the training sessions.</p>  <br />
<button className='enquire'>Enquire Now <span className='no'><FaArrowRight /></span> </button>
            </div>

            <div className='col-sm-5 list-3'>
     <img className='img-fluid' src={logo}alt="" /></div>

     </div>



     </div>


     </div>
<br />

<div className='container text-center'>
    <div className='row'>
<h2><b>OUR PRESTIGIOUS STUDENTS</b></h2><br /><br /><br />
<h5>Look below to see why we are unique</h5>
    </div>


    <div className='row'>
    <div id="demo" class="carousel slide" data-bs-ride="carousel">


<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


<div class="carousel-inner">
  <div class="carousel-item active">
  {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/-z6cpYKIX8c?si=oWcL31qqBcPMVLXN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
  </div>
  <div class="carousel-item active">
 
  {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/-z6cpYKIX8c?si=oWcL31qqBcPMVLXN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
   </div> 
  <div class="carousel-item active">
 
  {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/-z6cpYKIX8c?si=oWcL31qqBcPMVLXN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
  </div>
</div>


<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span class="carousel-control-prev-icon bg-dark"></span>
</button>
<button class="carousel-control-next bg-dark" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
        </div>
</div>

<br />

<div className='container text-center'>
    <div className='row'>
        <div className='col-sm-2'></div>
        <div className='col-sm-8'>

<h2><b>OUR PRESTIGIOUS STUDENTS</b></h2><br />
<h6>We take pride in offering top-notch technology training to their students and have a track record of providing effective placement training strategies. Many students have shared positive reviews about their experience at this IT training centre.</h6></div>
<div className='col-sm-2'></div>
    
    </div>

    </div>
<br /><br /><br />
<div className='container text-center'>
    <div className='row '>
       <div>
        <button className='view'>View</button>
        </div>
    </div>
    </div>

    </>
  )
}

export default Testimonial
