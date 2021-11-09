import React from 'react';
import { Button } from '@mui/material';
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';
import './home.css';
import sectionImg from '../../images/section.webp';
import section1Img from '../../images/section-2-1.webp';
import section2Img from '../../images/section-2-2.webp';

const Home = () => {
    return (
        <div className="home">
            <Banner />

            <div className='card-list'>
                <Card
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
            </div>
            <div className='card-list'>
                <Card
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title="3 Bedroom Flat in Bournemouth"
                    description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                    price="£130/night"
                />
                <Card
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="£350/night"
                />
                <Card
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="£70/night"
                />
            </div>

            <div className="img-section" style={{backgroundImage: `url(${sectionImg})`}}>
                <div className="content">
                    <h3>Not sure where to go? Perfect.</h3>
                    <Button>I'm flexible</Button>
                </div>
            </div>
            
            <div className="discover-section">
                <h3>Discover Lavish Experiences</h3>
                <div className="split-content">
                    <div className="main" style={{backgroundImage: `url(${section1Img})`}}>
                        <div className="content">
                            <h3>Things to do on your trip</h3>
                            <Button>Experiences</Button>
                        </div>
                    </div>
                    
                    <div className="main" style={{backgroundImage: `url(${section2Img})`}}>
                        <div className="content">
                            <h3>Things to do from home</h3>
                            <Button>Online Experiences</Button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;