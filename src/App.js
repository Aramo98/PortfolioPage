
import './App.css';
import { useEffect, useState} from 'react';
import {FaMoon,FaSun} from 'react-icons/fa';
import Avatar from './1643167400_4-abrakadabra-fun-p-oboi-dlya-kompyutera-anonimus-5.jpg'
import ListItems from './listItems/ListItems';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Me from './contentPage/Me';
import Education from './contentPage/Education';
import Contact from './contentPage/Contact';
import NoPage from './contentPage/NoPage';
import SocialBlock from './socialBlock/SocialBlock';

function App() {
  const [toggle,setToggle] = useState(false)
  useEffect(()=>{
const data = JSON.parse(localStorage.getItem("switch"));
if (data !== false) setToggle(JSON.parse(data))
  },[])

  useEffect(()=>{
 localStorage.setItem("switch",JSON.stringify(toggle))
  },[toggle])
  return (
   <>
    <div className="generalBlock">
      <div style={toggle?{backgroundColor:"black",color:"white"}:{backgroundColor:"beige",color:"black"}} className="leftSide">
        <div className="lightDarkToggle">
             <div className="circle" onClick={()=>setToggle(!toggle)}>
               {toggle?<FaMoon className='faMoon' style={{color:"yellow",backgroundColor:"blue"}}/>:<FaSun className='faSun'  style={{color:"yellow",backgroundColor:"black"}} />}
             </div>
        </div>

        <div className="avatarBlock">
          <div className="avatar">
            <img src={Avatar} alt="" />
          </div>
          <div className="nameAndSurname">
          <h3>Aram Margaryan</h3>
          </div>
          <div className="specialize">
           <span>Front-End Developer</span>
          </div>
        </div>

        <div className="listBlock">
          <ListItems toggle = {toggle}/>
        </div>
     <div className='socialBlock'>
      <h2>Find and Follow  Me On</h2>
      <SocialBlock toggle={toggle}/>
     </div>  
      </div>
      <div className="rightSide">
      <BrowserRouter>
      <Routes>
     
          <Route index element={<Me />} />
          <Route path="education" element={<Education toggle ={toggle}/>} />
          <Route path="contact" element={<Contact toggle ={toggle}/>} />
          <Route path="*" element={<NoPage />} />
          
      </Routes>
    </BrowserRouter>
      </div>
    </div>
   </>
  );
}

export default App;
