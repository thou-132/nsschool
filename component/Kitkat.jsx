import React from 'react'
import './Kitkat.css'
import logo from './images/img-1.png'
import king from './images/img-2.png'
import king2 from './images/img-3.png'
// import king3 from './images/img-4.png'
import king3 from './images/img-26.jpg'
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import king4 from "./images/img-11.png"
import king5 from "./images/img-12.png"
import king6 from "./images/img-13.png"
import king7 from "./images/img-14.png"
import king8 from "./images/img-15.png"
import king9 from "./images/img-16.png"
import king10 from "./images/img-17.png"
import king11 from "./images/img-18.png"
import king12 from "./images/img-20.png"
import king13 from "./images/img-21.png"
import king14 from "./images/img-22.png"
import form from'./images/img-27.png'
import {
  MinusOutlined,
    PlusOutlined,
  } from "@ant-design/icons";
  import { Collapse } from "antd";


const Kitkat = () => {

  const items2 = [
    {
      key: "1",
      label:
        "  What is Corporate training?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f] answer ">
          Corporate training is a system of activities designed to educate employees. It helps employers to obtain and sharpen their knowledge and skills to progress professionally and personally.
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: " What is Corporate training?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f] answer">
            A full-stack developer is a professional who can handle back-end
            development tasks such as databases, servers, and systems engineering,
            as well as front-end web development and UI work. Depending on the
            project, your work might include a mobile stack, a web stack, or a
            native application stack.
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: "Is Corporate training a good career?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f] answer">
            Undergraduates and fresher looking to make their career in full stack
            and MEAN stack. Developers, Designers and freelancers who want to
            build their own apps.
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label:
        "Why do we need corporate training?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f] answer">
            We do not enforce any pre-requisites for learners who want to up skill
            their knowledge. Everybody is welcome to enroll in this course.
          </div>
        </div>
      ),
    },
    {
      key: "5",
      label:
        "What are the 4 levels in Kirkpatrick's Training Evaluation Model?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f] answer">
            KitKat Software Technology offers you the most updated, relevant and high value
            real-time projects as part of the training program.
          </div>
        </div>
      ),
    },
    {
      key: "6",
      label: "What is the Addie Model?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-3 text-base pl-3 bg-[#49adcc8f] answer">
            Sometimes we do have discounts for our courses and make some offer
            announcements during the festival time
          </div>
        </div>
      ),
    },
  ];
  

  
  

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
    <br />

    <div id='concept'>
    <div className='container text-center '>
      
<div className='row '>

<div>
  <h2 className='text-center' >We Take Your Training To The Next Level</h2>
  <p className='text-center'>Our training solutions for the corporates help the companies and teams to get skilled in the field of expertise.
 </p>
</div><br />
<br />
<div className='col-sm-6'>
<img className='img-fluid' src={king} alt="" />
</div >


<div className='col-sm-5'>
<p>We at KitKat Software Technology provide highly professional corporate training programs on various courses including IT software, project management, soft skills, Agile development and other training in Coimbatore. Our training solutions for corporates help the companies and teams to get skilled on their field of expertise.</p>
<br />
<p>We emphasize on delivering expert-level corporate training programs that are tailored to suit the requirements of the client organization.</p>
<br />
<p>We carry out in-depth knowledge and widespread experience in latest technology throughout the training session.</p>
<br />
<p>KitKat Software Technology Corporate training practice surely enhances the
Learners’ Partaking and boosts the individual’s Knowledge Retention.
</p>
</div>
</div>




</div>

    

    <br /><br />

 <div className='container'>
<div className='row'>
  <div className='col-sm-1'></div>
<div className='col-sm-6 text-center '>
<h2>Our Proven Corporate Training Process and Student Satisfaction Standards</h2>
<br />
<p>The transformation from campus to corporate is a big challenge for a student to adapt to the change. Campus to company transitions wants a lot of attention for students as they involve loads of concentration in Personality Training.</p>

<p>KitKat Software Technology furnishes students, the knowledge which requires an understanding of realities in a corporate environment like the expected attitude, importance of learning as a continuous exercise over earning, excellence, ownership, creativeness, innovation, initiative to resolve issues, and optimistic motivation to beat internal intrusions like negative recollections. At the entry-level, all beginner training starts up in a measured line and their growth depends on their perspective, talent, and performance.</p>
</div>

<div className='col-sm-5'>
<img className='img-fluid' src={king2} alt="" />
  
</div >
</div>


</div>
</div>
<br /><br />
<div className='container'>
<div className='row ' style={{alignItems:'center'}}>
<div className='col-sm-1'>

</div>

<div className='col-sm-4 teach '>
 
    <div className='cen'>   
   <img className='img-fluid range' src={king3} alt="" />  
      </div> 
</div>

<div className='col-sm-6 lesson  '>



 <h4>WHY KitKat Software Technology FOR CORPORATE TRAINING?</h4><br />
<p>Find us why we are the best and unique in indulging in corporate training practices from the below details.</p>
<br />

<h6 >  <FaPlus  /> What are the benefits of getting trained Corporate training at KitKat Software Technology?</h6>

<br />
<h6> <FaPlus  />  Will you provide hands-on training in Corporate Learning?</h6>
<br />
<h6> <FaPlus  />  I am scared of stage presentations. Could I join your Corporate training?</h6>
<br />
<h6> <FaPlus  />  Is online class available for corporate learning?</h6>
<br />
<h6> <FaPlus  />  Who is my Trainer?</h6>
<br />
<h6> <FaPlus  />  How many batches are available for training?</h6> 


</div>


<div className='col-sm-1'>

</div>

</div>
</div>
  <br /> 


<div id='contact2 '>


<div className='container '>
<div className='row text-center '>
<h2>Technology Specializations in Corporate Training</h2>
<br />
<p>KitKat Software Technology launched the below courses for Corporate Training and categorised them for your easy access.</p>

   {/* <div className='col-sm-2'>

</div>    */}

<div className='col-sm-3'>
  <div className='orange '> <h6><b> Digital Business </b></h6> </div>        <br />
  
  
  <div className='orange1' > <p>Digital Marketing</p> <img className='img-fluid king4'  src={king4} alt=""  /></div>
<br />
  <div className='orange1' > <p>Digital Marketing</p> <img className='img-fluid king4'  src={king4} alt=""  /></div>
  </div>

  <div className='col-sm-3'>

  <div className='blue'> <h6><b> Technology</b></h6> </div> <br />
  <div className='orange1' > <p>Full Stack Development</p> <img className='img-fluid king4'  src={king5} alt=""  /></div>
 <br />
 <div className='orange1' > <p>Angular Js Training</p> <img className='img-fluid king4'  src={king6} alt=""  /></div>
 <br />
 <div className='orange1' > <p>iOS App Development</p> <img className='img-fluid king4'  src={king7} alt=""  /></div>
 <br />
 <div className='orange1' > <p>Android App Development</p> <img className='img-fluid king4'  src={king8} alt=""  /></div>
 <br />
 <div className='orange1' > <p>Python Development</p> <img className='img-fluid king4'  src={king9} alt=""  /></div>
 <br />
 
 </div >
 
 <div className='col-sm-3'>

<div className='yellow'> <h6><b> Digital Operations </b></h6> </div> <br />
  
<div className='orange1' > <p>Agile & Scrum</p> <img className='img-fluid king4'  src={king10} alt=""  /></div>
 <br />
 <div className='orange1' > <p>IT Services</p> <img className='img-fluid king4'  src={king11} alt=""  /></div>
 <br />
 <div className='orange1' > <p>Project Management</p> <img className='img-fluid king4'  src={king12} alt=""  /></div>
 <br />

 </div>


<div className='col-sm-3'>

<div className='red'> <h6><b> Data </b></h6>  </div> <br />

<div className='orange1' > <p>Data Science</p> <img className='img-fluid king4'  src={king13} alt=""  /></div>
 <br />
 <div className='orange1' > <p> Data Science</p> <img className='img-fluid king4'  src={king13} alt=""  /></div>
 <br />

</div>

   {/* <div className='col-sm-1'>

</div>   */}


</div>

</div>


</div>
<br />

<div id='Middle'>

<div className='container nav'>
<div className='row'>

<div className='col-sm-1'>

</div>

<div className='col-sm-6'>
<h4><b>Our Course Brochure explain you in detail about our KitKat Software Technology, our Training programs & the course pricing structure.</b></h4>
<br />
<p>We believe in imparting Technical Knowledge acts as a key to IT Aspirants success. We also provide 100% job assured placement training for your future betterment.Download the FREE NSCHOOL Academy brochure to know more about us!.</p>
</div>

<div className='col-sm-4'>


   <div className='middle1'> 
<img className='img-fluid' src={king14} alt="" />
</div>

</div>
<div className='col-sm-1'>

</div>

</div>
</div>


</div>
<br />
<div className='container text-center'>
<div className='row'>
<div className='corporate'>
  <h3>Our Corporate Clients</h3>
<br />
<p> <b>KitKat Software Technology being the Best software training institute in coimbatore with placement has tied up with more than 50+ companies from MNC’s , CMM level and domestic IT companies.</b></p>
</div>

</div>



</div>

<br />




<div className='container'>
<div className="text-3xl font-semibold mt-14 mb-6 faq1">
           <h4> Frequently Asked Questions</h4>
          </div>
          <div className='faq'>
            <Collapse
              items={items2}
              expandIcon={({ isActive }) => (
                <div>
                  {!isActive ? (
                    <PlusOutlined className="text-blue" />
                  ) : (
                    <MinusOutlined className="text-green" />
                  )}
                </div>
              )}
              accordion
            />
          </div>
          </div>
<br />

          <div className='container'>
  <div className='row'>
    <div className='col-sm-1'></div>
    <div className='col-sm-5'>
      <h2><b>#1 Rated Corporate Training Company</b></h2>
      <p><b>Programming is a Dream and KitKat Software Technology makes sure
to fulfill your dream come true!.</b></p>
    <img src={form} alt='' style={{width:"80%"}}/>
    </div>
  <div className='col-sm-5 form'>
   <h5 style={{textAlign:'center'}}><b>Schedule your Training</b></h5>
    <br />
    <div className='parent'>

   <div><input type="text" placeholder='Name' /></div> <br />
    
    
<div>
    <input type="text" placeholder='PhoneNumber' /></div><br />
    

    <div><input type="text" placeholder='Email' /></div><br />
    <div>
    <input type="text" placeholder='compan Name' /></div><br />
    
    <div className='message1'><input className='men' type="text" placeholder='Message' /></div><br />
    </div>
    <div className='sub'><br />
      <button className='sumit'>Submit Now</button>
    </div>
</div>
<div className='col-sm-1'></div>

</div>
</div>

</>

    
  )
  }
export default Kitkat;




