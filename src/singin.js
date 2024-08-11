import logo from './logo.svg';
import { useState } from 'react';
export const Sing=()=>{
    const[id,setid]=useState('')
    const[Pass,setpass]=useState('')
     const[idd,setidd]=useState('')
     const[Passs,setpasss]=useState('')
     const[hipi,sethipi]=useState('show')
     const[spinp,setspinp]=useState('password')
    const task=Event=>{
        if(Pass.length>=0){
            setpasss(' ')
        }
        else{
            setpasss('enter your pass-word');
        }
        if(id.length>=0){
            setidd('')
        }
        else{
            
            setidd('enter your email id');
        }
        
        setid(Event.target.value)
    }
    const task1=(Event)=>{
        if(id.length>=0){
            setidd('')
            setpasss(' ')

        }
        else{
            
            setidd('enter your email id');
        }
        if(Event.target.value===" "){
            setpass('enter your pass-word');
            
        }
        else{
            setpasss('');  
        }
        setpass(Event.target.value)
    }
   const task2=()=>{
    if(id.length===0){
        setidd('enter your email id');
    }
    if(Pass.length===0){
        setpasss('enter your password');
    }
   }
   let a=0;
   const task3=()=>{
    a++;
    if(a%2===1){
        sethipi('hide')
        setspinp('input')
    }
    else{
        sethipi('show')
        setspinp('password')
    }
   }
    return (
        <div>
            <div className='main'>
        <div ><img className='img1-1' src={logo}></img></div>
        <div className='sing-in-box'>
            <h1>sign In</h1>
            <div className='email-pass-wrap'>
                <input onChange={task} type='email'className='email-pass'/></div>
            <div className='email-pass-wrap'>
                <input onChange={task1} type={spinp}className='email-pass'/>
                <span className='show-hid' onClick={task3}>{hipi}</span></div>
            <div className='.singup-but-wrap'><button className='singup-but'onClick={task2}>Sign In</button></div>
            <div className='check-box-wrap'> 
                <div><input type='checkbox'/><span>Remember me</span></div>
                <div><span >Need help?</span></div>
            </div>
            <p className='p1'>New to Netflix?<span> Sign up now.</span></p>
            <p className='p2'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span></p>
        <div>
            <span className='err1'>{idd}</span>
            <span className='err2'>{Passs}</span>
        </div>
        </div>
            </div>
        </div>
    )
}