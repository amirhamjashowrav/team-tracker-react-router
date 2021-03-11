import React, { useEffect, useState } from 'react';
import image from '../../team-show/Photo/gallery.jpg';
import './Home.css';
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[])
    return (
        <div>
           <div className = 'image-container'>
                <img src={image} className="img-fluid" alt="gallery"/>
                <h1 className = 'centered'>Team Show</h1>
           </div>
           {
               teams.map(team => <Team team = {team}></Team>)
           }
        </div>
    );
};

export default Home;