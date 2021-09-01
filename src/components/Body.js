const Body = () => {
    return (
        <div className='body'>
            <div className='grid-container'>
                <div className='grid-item'>
                    <u>How does it work?</u> 
                    <div className='grid-item-info'>Step 1</div>
                    <div className='divider'></div>
                    <div className='grid-item-info'>Step 2</div>
                    <div className='divider'></div>
                    <div className='grid-item-info'>Step 3</div>
                    <div className='divider'></div>
                    <div className='grid-item-info'>Step 4</div>
                    <div className='divider'></div>
                    <div className='grid-item-info'>Step 5</div>
                </div>
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

export default Body
