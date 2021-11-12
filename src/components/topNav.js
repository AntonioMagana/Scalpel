export const TopNav = ( {homeClick, bbClick, amazonClick, walmartClick, howClick, aboutClick} ) => {
    return (
        <div class='topnav'>  
            <button className='navbtn' onClick={homeClick}>Home</button>
            <button className='navbtn' onClick={bbClick}>Best Buy</button>
            <button className='navbtn' onClick={amazonClick}>Amazon</button>
            <button className='navbtn' onClick={walmartClick}>Walmart</button>
            <button className='navbtn' onClick={howClick}>How To?</button>
            <button className='navbtn' onClick={aboutClick}>About Us</button>
        </div>
    )
}

export default TopNav


 
                {/* Old Drop Down Menus

                <li className='dropdown'>
                    <a href='javascript:void(0)' className='dropbtn'>Stores</a> 
                    <div className='dropdown-content'>
                        <a href='#' >Best Buy</a>
                        <a href='#' >AmazonBody</a>
                        <a href='#' >WalmartBody</a>
                    </div>
                </li> */}
                
                {/* <li className='dropdown'>
                    <a href='javascript:void(0)' className='dropbtn'>Popular Items</a> 
                    <div className='dropdown-content'>
                        <a href='#' >Xbox Series X</a>
                        <a href='#' >PS5</a>
                        <a href='#' >GPU's</a>
                    </div>
                </li> */}