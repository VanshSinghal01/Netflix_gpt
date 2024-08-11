import { img1,img2,img3, img4 ,img5} from './images';
import logo from './logo.svg';
import Languages from './lan.svg';
import { Boot } from './bootstap-';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const Main=()=>{
    const[data,setdata]=useState('none');
  const[dis,setDis]=useState('block');
  const task=()=>{
    setDis('none')
    setdata('block')
    console.log('hello')
  }
    return(
        <div className='main-wrapper' style={{display:dis}}>
      <div className='main'>
        <div className='oppicity-wrap'>  </div>
        <div ><img className='img1' src={logo}></img></div>
        <div className='dropdown-wrapper'>
          <div className='select-dd-wrap'><select className='select-dd'>
          <option className='opt'><img src={Languages}/>English</option>
          <option className='opt'>हिन्दी</option>
          </select></div>
          <div>
            <button className='singin'><Link to='/signup' >Sing In</Link></button>
          </div>
        </div>
        <div className='lines-wrap'>
            <h1>The biggest Indian hits. The best Indian stories. All streaming here.</h1>
            <p className='line2'>Watch anywhere. Cancel anytime.</p>
            <p className='line2'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='email-wrapper'>
              <div className='email-div'><input className='email' type='email' placeholder='Email address'/></div>
              <button className='start-button'>Get Start </button>
            </div>
            </div>
      </div>


      <div className='main2-wraper'>
          <div className='main2'>
          <div className='main2-left'>
            <h1>Enjoy on your TV</h1>
            <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, 
              Apple TV, Blu-ray players and more.</h3>
          </div>
          <div className='main2-right'>
            <img src={img1}/>
          </div>
      </div>
          </div>


          <div className='main3-wrap'>
            <div className='main3'>
            <div className='main3-left'>
            <img src={img2} className='mob'/>
            <div className='pic3-div'>
              <div className='div1'><img src={img3}/></div>
              <div className='div2'><p>Stranger Things
                Download...
              </p></div>
              <div className='div3'><span>*</span></div>
            </div>
          </div>
          <div className='main3-right'>
            <h1>Download your shows to watch offline</h1>
            <h3>Save your favourites easily and always have something to watch.</h3>
          </div>
           </div>
          </div>

          <div className='main4-wrap'>
          <div className='main4'>
          <div className='main4-left'>
            <h1>Watch everywhere</h1>
            <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
          </div>
          <div className='main4-right'>
            <img src={img4}/>
          </div>
      </div>
          </div>


          <div className='main5-wrap'>
            <div className='main5'>
            <div className='main5-left'>
            <img src={img5} className='mob2'/>
          </div>
          <div className='main5-right'>
            <h1>Create profiles for kids</h1>
            <h3>Send children on adventures with their favourite characters in a space made just 
              for them—free with your membership.</h3>
          </div>
           </div>
          </div>


          <div className='main6-wrap'>
        <Boot/>
          </div>


          <div className='main7-wrap'>
            <div className='main7'>
              <p>Questions? Call 000-800-919-1694</p>
              <div>
                <span>
                  FAQ
                </span>
                <span>             
                  Help Centre
                </span>
                <span>               
                  Account
                </span>
                <span>
                Media Centre
                </span>
              </div>
              <div>
                <span>
                Investor Relations
                </span>
                <span>             
                  Jobs
                </span>
                <span>               
                  Ways to Watch
                </span>
                <span>
                 Terms of Use
                </span>
              </div>
              <div>
                <span>
                Privacy
                </span>
                <span>             
                 Cookie Preferences
                </span>
                <span>               
                Corporate Information
                </span>
                <span>
                Contact Us
                </span>
              </div>
              <div>
                <span>
                Speed Test
                </span>
                <span>             
                Legal Notices
                </span>
                <span>               
                Only on Netflix
                </span>
                <span>
                Media Centre
                </span>
              </div>
              <div>
                <select className='select-ddd'>
                  <option className='opt'>English</option>
                  <option className='opt'>हिन्दी</option>
                </select>
              </div>
              <p>Netflix India</p>
            </div>
          </div>
    </div>


    )
}