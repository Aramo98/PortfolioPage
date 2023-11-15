
import {FaFacebook,FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa'
import './socialblock.css'
function SocialBlock({toggle}){
return(
    <>
    <div  className='social'>
    <a style={toggle?{color:"white"}:{color:"black"}} href="https://www.facebook.com/aram.m1998m"><FaFacebook /></a>
    <a style={toggle?{color:"white"}:{color:"black"}} href="https://www.instagram.com/_a_margaryan98/"><FaInstagram /></a>
    <a style={toggle?{color:"white"}:{color:"black"}} href="https://github.com/Aramo98"><FaGithub /></a>
    <a style={toggle?{color:"white"}:{color:"black"}} href="https://www.linkedin.com/in/aram-margaryan-1b557a252/"><FaLinkedin /></a>
    </div>


    </>
)
}

export default SocialBlock