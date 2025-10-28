


const TopNavbar = ()=>{
    const price = 50
    return (
        <nav style={{height:"80px", backgroundColor:"black", color:"white", display:"flex",  padding:"0px 15px", justifyContent:"space-around"}}>
            <div>
                <p>Free shipping on all U.S orders over ${price}</p>
            </div>

            <div>
                <ul style={{listStyleType:"none", display:"flex", gap:"10px"}}>
                    <li>USD</li>
                    <li>English</li>
                    <li>My Account</li>
                </ul>
            </div>
        </nav>
    )
}


export default TopNavbar