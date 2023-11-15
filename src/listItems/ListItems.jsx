import './items.css'


function ListItems({toggle}){

return(
    <>
    <nav>
        <ul>
            <li>
                <a style={toggle?{color:"white"}:{color:"black"}} href="/">Me</a>
                </li>
            <li>
                <a style={toggle?{color:"white"}:{color:"black"}} href="/education">Education</a>
                </li>
            <li>
                <a style={toggle?{color:"white"}:{color:"black"}} href='/contact'>Contact</a>
                </li>

   
   
        </ul>
    </nav>

    </>
)

}

export default ListItems