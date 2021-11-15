const HowToPage = () => {
    return (
        <div>
            <div className='grid-container'>
                {/* Left Block of Grid */}
                <div className='grid-item'>
                    <u>How does it work?</u>
                    <div className='grid-item-info'>
                        At varius vel pharetra vel turpis nunc eget lorem dolor.
                        <br></br>
                        <br></br>
                        Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit.
                        <br></br>
                        <br></br>
                        Mi tempus imperdiet nulla malesuada.
                        <br></br>
                        <br></br>
                        Ut porttitor leo a diam sollicitudin tempor id eu nisl.
                        <br></br>
                        <br></br>
                        Nulla pharetra diam sit amet nisl suscipit adipiscing.
                    </div>
                </div>
                {/* Right Block of Grid */}
                <div className='grid-item'>
                    <u>Frequently Asked Questions</u>
                    <div>
                        <button className='faq-button'>Why?</button>
                        <button className='faq-button'>Who?</button>
                        <button className='faq-button'>How?</button>
                        <button className='faq-button'>Where?</button>
                        <button className='faq-button'>When?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToPage
