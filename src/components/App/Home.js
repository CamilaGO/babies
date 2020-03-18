import React, {useState, useEffect} from 'react';
import EventForm from '../EventForm';
import Events from '../Events';


function Home(){
    useEffect(() => {
        fetchItems();
    }, []);
    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json();
        console.log(items);
    }
    return (
        <div >
            <h1 className="home-title">Baby App</h1>
            <img 
            src="https://theseymourowl.com/wp-content/uploads/2019/08/rugrats.jpg"
            alt="new" className="foto-home"
            />
        </div>
    )
}
export default Home;