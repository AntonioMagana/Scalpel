export const TopNav = ( {homeClick, bbClick, amazonClick, walmartClick, howClick, aboutClick} ) => {
    return (
        <div class='topnav'>  
            <button className='navbtn' onClick={homeClick}>     Home</button>
            <button className='navbtn' onClick={bbClick}>       Best Buy</button>
            <button className='navbtn' onClick={amazonClick}>   Amazon</button>
            <button className='navbtn' onClick={walmartClick}>  Walmart</button>
            <button className='navbtn' onClick={howClick}>      How To?</button>
            <button className='navbtn' onClick={aboutClick}>    About Us</button>
        </div>
    )
}

export default TopNav