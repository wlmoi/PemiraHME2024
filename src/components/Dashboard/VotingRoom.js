import React, { useState } from 'react';

const VotingRoom = () => {
    const [hasVoted, setHasVoted] = useState(false);

    const handleVote = () => {
        if (!hasVoted) {
            setHasVoted(true);
            alert('Vote submitted successfully!');
        } else {
            alert('You have already voted!');
        }
    };

    return (
        <div>
            <h2>Voting Room</h2>
            <button onClick={handleVote} disabled={hasVoted}>
                {hasVoted ? 'Vote Submitted' : 'Submit Vote'}
            </button>
        </div>
    );
};

export default VotingRoom;
