import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import image1 from '../../team-show/Photo/male.png';
import image2 from '../../team-show/Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMars, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';


const TeamDetails = () => {
    const {idTeam} = useParams();
    const [team, setTeam] = useState([]);
    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[idTeam])

    let gender;
    if (team.strGender === "Male"){
        gender = <img className="img-box" src={image1} alt=""/>
    }
    else{
        gender = <img className="img-box" src={image2} alt=""/>
    }
    
    return (
        <div>
            <div className = 'image-container'>
                <img src={team.strTeamBanner} className="img-fluid" alt="gallery"/>
                <h1 className = 'centered'><img src={team.strTeamBadge} alt=""/></h1>
           </div>
           <div className="team-detail">
                <div>
                    {gender}
                </div>
                <div className="detail-box">
                    <h1>{team.strTeam}</h1>
                    <h5><FontAwesomeIcon icon={faCheckCircle}/> Founded: {team.intFormedYear}</h5>
                    <h5><FontAwesomeIcon icon={faFlag}/> Country: {team.strCountry}</h5>
                    <h5><FontAwesomeIcon icon={faFutbol}/> Sports Type: {team.strSport}</h5>
                    <h5><FontAwesomeIcon icon={faMars}/> Gender: {team.strGender}</h5>
                </div>
                <div>
                    <p>{team.strDescriptionEN}</p>
                </div>
                <center className="icon" >
                    <a className="icon-tw" href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a className="icon-fb" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a className="icon-yt" href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube}/></a>
                </center>
           </div>
            
        </div>
    );
};

export default TeamDetails;