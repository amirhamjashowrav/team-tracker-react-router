import React from 'react';
import { useHistory } from 'react-router';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const {strTeam, strTeamBadge, strSport, idTeam} = props.team;

    const history = useHistory();
    const handleClick = (idTeam) => {
        const url = `/team/${idTeam}`;
        history.push(url);
    }
    return (
            <div className = 'column col-lg-4 col-sm-12'>
                <div className = 'card'>
                    <img src={strTeamBadge} alt=""/>
                    <h3>{strTeam}</h3>
                    <p>Sports type: {strSport}</p>
                    <button onClick = {()=> handleClick(idTeam)} className = 'btn btn-primary button'>Explore <FontAwesomeIcon icon={faArrowRight} /> </button>
                </div>
            </div>
    );
};

export default Team;