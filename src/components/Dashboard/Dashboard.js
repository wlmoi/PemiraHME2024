import React from 'react';
import VotingRoom from './VotingRoom';
import VisionMission from './VisionMission';
import VoteCounts from './VoteCounts';
import AboutUs from './AboutUs';

const Dashboard = ({ onLogout }) => {
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={onLogout}>Logout</button>
            <VotingRoom />
            <VisionMission />
            <VoteCounts />
            <AboutUs />
        </div>
    );
};

export default Dashboard;
