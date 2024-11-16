import React from 'react';

const VisionMission = () => {
    const kandidat = [
        { nama: 'Medika Surya Ganteng', visi: 'ngerizz', misi: 'Misi A' },
        { nama: 'Irfan Nursigma', visi: 'Visi B', misi: 'Misi B' },
    ];

    // k itu indeksnya,
    return (
        <div>
            <h2>Visi/Misi</h2>
            {kandidat.map((k, index) => (
                <div key={index}>
                    <h3>{k.nama}</h3>
                    <p>Visi: {k.visi}</p>
                    <p>Misi: {k.misi}</p>
                </div>
            ))}
        </div>
    );
};

export default VisionMission;
