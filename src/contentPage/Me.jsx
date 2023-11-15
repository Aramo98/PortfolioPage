
import MyBackground from '../1643167400_4-abrakadabra-fun-p-oboi-dlya-kompyutera-anonimus-5.jpg'
import { Helmet } from 'react-helmet'
function Me() {
    return (
        <>
        <Helmet>
            <title>
            Home Page
            </title>
        </Helmet>
        <div className="image">
            <img src={MyBackground} alt="" />
            <div className="overlay">
                <div className="welcomeHeader">
                    <h1 style={{color:"white"}}>Welcome</h1>
                    <span style={{color:"white"}}>I'm a Web Developer</span>
                </div>
                <div className="contactButton">
                    <a  href="/contact">Contact Me</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Me