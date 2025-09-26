const playerUid = {
    1 : '3f9b2a1e-6c4d-4b2a-9f0e-8a7d6c5b4e1f',
    2 : '8a1d3f2b-4c7e-4f1a-9b2c-5d6e7f8a9b0c',
    3 : 'c3e4b5a6-11f2-4d3b-8a7e-0f1e2d3c4b5a'
};

const userName = {
    1 : '77arf4',
    2 : 'Gamertahsin9206',
    3 : 'swach'
};

const PossiblePingResult = ['Online', 'Offline'];

function getRandomIP() {
    return `${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}`;
}

function checkIfOnline(playerIndex) {
    const status = PossiblePingResult[Math.floor(Math.random() * PossiblePingResult.length)];

    if(status === 'Offline') {
        return `${userName[playerIndex]} is offline, unable to ping.`;
    } else {
        const fakeIP = getRandomIP();
        const location = 'Bangladesh';
        return `${userName[playerIndex]} is online! Pinged IP is ${fakeIP} and location is ${location}.`;
    }
}

console.log(checkIfOnline(1));
console.log(checkIfOnline(2));
console.log(checkIfOnline(3));
