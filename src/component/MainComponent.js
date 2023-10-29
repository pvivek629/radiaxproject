import React from 'react'
import "./MainComponent.css"
import graph from "../component/graph.svg"
import Cartoon from "../component/logo/Cartoon_Network_logo.png"
import booking from "../component/logo/Booking.com_logo.png"
import dropbox from "../component/logo/Dropbox_logo.png"
import toshiba from "../component/logo/Toshiba_logo.png"
import slack from "../component/logo/Slack_logo.png"
import netflix from "../component/logo/Netflix_logo.png"
import spotify from "../component/logo/Spotify_logo.png"
import cococola from "../component/logo/CocaCola_logo.png"
import redbull from "../component/logo/RedBull_logo.png"
import collabrate from "../component/icon/collabration.svg"
import priotize from "../component/icon/priotize.svg"
import track from "../component/icon/track.svg"
import earner from "../component/ranked/topearner.svg"
import arrow from "../component/icon/Arrow_icon.svg"


function MainComponent() {
  return (
    <div>
      <div className='MainComponent'>
        {/* Navbar */}
          <div className="container col-lg-12 navbar d-flex">
              <h1 className='navbarheader col-lg-6 pt-lg-4'>TaskMan</h1>
              <div>
                <a  className='col-lg-6 text-decoration-none navbarbutton'>Try Free</a>  
              </div>
          </div>

        {/* heading */}
        <div className="heading container d-flex">
          <div className="col-lg-5 mt-3">
            <p className='headingtext '>Task Management And Lists Tool</p>
            <p className="headingpara">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            <div className="d-flex mt-5">
              <input type="text" className='headinginput col-lg-6' placeholder='Name@company.com'/>
              <div className='col-lg-6 d-flex mx-lg-4'>
                <a className='headingbutton '>Try for free</a>
              </div> 
            </div>

            {/* icon */}

            <div className="col-lg-12 iconpage">
              <div className="d-flex col-lg-12 justify-content-between">
                <img src={Cartoon} alt="" className='icon  col-lg-2'/>
                <img src={booking} alt=""  className='icon  col-lg-4'/>
                <img src={dropbox} alt="" className='icon  col-lg-4'/>
              </div>
              <div className="d-flex col-lg-12 justify-content-between mt-5">
                <img src={toshiba} alt="" className='icon  col-lg-3'/>
                <img src={slack} alt=""  className='icon  col-lg-4'/>
                <img src={netflix} alt="" className='icon  col-lg-4'/>
              </div>
              <div className="d-flex col-lg-12 justify-content-between mt-5">
                <img src={spotify} alt="" className='icon  col-lg-3'/>
                <img src={cococola} alt=""  className='icon  col-lg-4'/>
                <img src={redbull} alt="" className='icon  col-lg-3'/>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={graph} alt="" className='graphimage'/>
          </div>
        </div>
      </div>
      {/* card */}
      <div className="carddetail container">
        <div className='d-flex justify-content-center'>
          <p className='text-center cardheading'>Key benefits of using task management software</p>
        </div>
        <div className="cardnumber d-lg-flex col-lg-12 justify-content-between mt-lg-5">
          <div className="carddesign col-lg-4">
            <div className='d-flex justify-content-center'>
              <img src={track} alt="" /> 
            </div>
            <p className='cardhead'>Keep tasks in one place</p>
            <div className='d-flex justify-content-center'>
              <p className='cardheaddetail'>Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
            </div>
          </div>
          <div className="carddesign col-lg-4">
            <div className='d-flex justify-content-center'>
              <img src={priotize} alt="" /> 
            </div>
            <p className='cardhead'>Prioritize your work</p>
            <div className='d-flex justify-content-center'>
              <p className='cardheaddetail'>Tracking tasks allows everyone to understand which are more important or require more time, so</p>
            </div>
          </div>
          <div className="carddesign col-lg-4">
            <div className='d-flex justify-content-center'>
              <img src={collabrate} alt="" />
            </div>
            <p className='cardhead'>Keep tasks in one place</p>
            <div className='d-flex justify-content-center'>
              <p className='cardheaddetail'>Tracking tasks allows everyone to understand which are more important or require more time, so</p>
            </div>
          </div>
          
        </div>
      </div>
      {/* Rank */}
      <div className='ranked mt-5'>
        <div className="container d-lg-flex">
          <div className="col-lg-6 ">
            <img src={earner} alt="" className='w-100'/>
          </div>
          <div className="col-lg-6 px-lg-5">
            <p className='rankedheading'><b>Why do you need task management software?</b></p>
            <p className="rankeddetail">Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</p>
            <div className="rankedlearn d-flex mt-lg-5">
              <p className='learnmore mt-1'>LEARN MORE</p>
              <div className='px-3'>
                <img src={arrow} alt=""  className='rankedarrow'/>
              </div>
              
            </div>
          </div>

        </div>
        {/* workdone */}
        <div className="container">
          <p className="text-center worktext">Get better work done</p>
          <div className='d-flex justify-content-center'>
            <p className="text-center workpara">See why millions of people across 195 countries use TaskMan.</p>
          </div>
          <div className="d-flex mt-3 justify-content-center">
            <div className='d-flex'>
              <input type="text" className='headinginput col-lg-6' placeholder='Name@company.com'/>
              <div className='col-lg-6 d-flex mx-lg-4'>
                <a className='headingbutton '>Try for free</a>
              </div> 
            </div>
          </div>
        </div>
        <div className='rankedimage'></div>
      </div>
    
    </div>
  )
}

export default MainComponent