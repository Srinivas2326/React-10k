import Banner from './Banner'
import {Cards} from './Banner'



function Navbar(){
    return <div>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
        <Banner />
        <Cards />
    </div>
}


export default Navbar