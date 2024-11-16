import React from 'react';

const VoteCounts = () => {
    // Format Objek nanti ya Ken
    const votes = {
        total: 69,
        quorum: 100,
    };

    return (
        <div>
            <h2>Total Suara yang dah dipungut brok</h2>
            <p>Total Suara: {votes.total}</p>
            <p>Apakah sudah sesuai kuorum: {votes.total >= votes.quorum ? 'Ya' : 'Tidak'}</p>
        </div>
    );
};

export default VoteCounts;
