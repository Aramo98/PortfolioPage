
import{ Form,Button }from 'react-bootstrap';
import { useState,useRef } from 'react';
 import {FaEnvelope } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import GifImage from '../843ba4_bd3021bc6649414fa9451b5029146550~mv2.gif'
import emailjs from '@emailjs/browser';
import './contact.css'
function Contact({toggle}) {

    const form = useRef();

let [username,setUserName] = useState("");
let [userEmail,setEmail] = useState("");
let [text,setText] = useState("")

const[changeText,setChangeText] = useState(`Send Message`)

const [userMessage,setUserMessage] = useState("");
const [emailMessage,setEmailMessage] = useState("");
const [textMessage,setTextMessage] = useState("")



  const changeNameValues = (evt)=>{
    setUserName(evt.target.value)
    }
    const changeEmailValues = (evt)=>{
      setEmail(evt.target.value)
    }
    const changeMessageValues = (evt)=>{
      setText(evt.target.value)
    }


const handleSubmit = (evt)=>{
    evt.preventDefault();
    if(username === "" ||username === " "){
      setUserMessage("Pleae Write Your name");
      return false
    }
    if(username.length <= 2){
        setUserMessage("Write Your name Full")
        return false
      }else{
        setUserMessage("")
      }
      if(userEmail === ""||userEmail === " "){
        setEmailMessage("Pleae Write Your Email");
        return false
      }
      if(userEmail.length <= 2){
        setEmailMessage("Write Your Email Correct")
          return false
        }
        if(userEmail.indexOf("@") === -1 || userEmail.indexOf(".") === -1){

        setEmailMessage(" Your Email Invalid")
          return false
        }
        else{
            setEmailMessage("")
        }
        
        if(text === ""||text === " "){
            setTextMessage("Write Your Message");
            return false
          }
         else{
          
          setChangeText("Sending ...")
            setTextMessage("");  
            setTimeout(()=>{
              emailjs.sendForm('service_protfolioPage', 'template_gv34kuk', form.current, '8UH-SE6PQzrrKtIDL')
            .then((result) => {
                console.log(result.text);
                setChangeText("Send Message")
            }, (error) => {
                console.log(error.text);
            });
            },2500)
         
     
            }
}
    return (
        <>

        <Helmet>
      <title>
        Contact Me
      </title>
        </Helmet>

        <div style={toggle?{backgroundColor:"black"}:{backgroundColor:"white"}} className="FormContainer">
        <div className="Header">
    <h2 style={toggle?{color:"white"}:{color:"black"}}>Contact Me</h2>
</div>

<div className="FormAndImage">



  
<Form className='FormBlock' ref={form} >


<Form.Group className="inputBox" controlId="exampleForm.ControlInput1">
       
        <Form.Control onChange={changeNameValues} type="text" name="to_name" placeholder="name@example.com" />
        <span style={toggle?{color:"white"}:{color:"black"}}>{userMessage}</span>
      </Form.Group>

      <Form.Group className="inputBox" controlId="exampleForm.ControlInput1">
        
        <Form.Control onChange={changeEmailValues} type="text"  name="from_name" placeholder="name@example.com" />
        <span style={toggle?{color:"white"}:{color:"black"}}>{emailMessage}</span>
      </Form.Group>
      <Form.Group className="AreaBox"   controlId="exampleForm.ControlTextarea1">
        <textarea placeholder='Write your Message' name="message"  onChange={changeMessageValues}   />
         <span style={toggle?{color:"white"}:{color:"black"}}>{textMessage}</span>
      </Form.Group>
    
    <div  className="subButton">
    <Button className='button'   onClick={handleSubmit} variant='primary'>
     <span><FaEnvelope /></span> 
     <span>{changeText}</span> 
      </Button>
    </div>
    
    </Form>

<div className="imageBlock">
<img src={GifImage} alt="" />
</div>
        </div>
        </div>

   


        </>
    )
}

export default Contact



// 
// 
// 
// 
// 

// 
// 
// 
