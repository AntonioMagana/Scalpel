export const TopNav = () => {
    return (
        <div class='topnav'>
            <ul>
                <li><div className='navbtn'>Home</div></li>
                <li><div className='divider'></div></li>
                <li className='dropdown'>
                    <a href='javascript:void(0)' className='dropbtn'>Stores</a> 
                    <div className='dropdown-content'>
                        <a href='#' >Best Buy</a>
                        <a href='#' >Amazon</a>
                        <a href='#' >Walmart</a>
                    </div>
                </li>
                <li><div className='divider'></div></li> 
                <li className='dropdown'>
                    <a href='javascript:void(0)' className='dropbtn'>Popular Items</a> 
                    <div className='dropdown-content'>
                        <a href='#' >Xbox Series X</a>
                        <a href='#' >PS5</a>
                        <a href='#' >GPU's</a>
                    </div>
                </li>
                <li><div className='divider'></div></li> 
                <li><div className='navbtn'>About Us</div></li>
            </ul> 
        </div>
    )
}

export default TopNav
