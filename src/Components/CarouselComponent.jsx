import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div style={{ width: '500px', margin: 'auto', backgroundSize: 'container' }}>
            <Carousel>
                <div>
                    <img src='https://emerging-europe.com/wp-content/uploads/2019/03/bigstock-gorgeous-spring-countryside-la-280866130-990x556.jpg' alt="Romania" />
                    <p className="legend">Romania</p>
                </div>
                <div>
                    <img src='https://images.theconversation.com/files/349143/original/file-20200723-35-1x7it1t.jpg?ixlib=rb-1.1.0&rect=136%2C157%2C6853%2C4485&q=45&auto=format&w=926&fit=clip' alt='Hong Kong' />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="https://www.karpaten.ro/media/cache/big_image/images/hotel/7049/s3-circuit-japonia-226444.jpg" alt="Japan" />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src="https://pix10.agoda.net/hotelImages/5936/-1/5133a02dbd034d06dfa018ec7d500153.jpg?s=1024x768" alt="Las Vegas" />
                    <p className="legend">Las Vegas</p>
                </div>
            </Carousel>

        </div>
    )
}

