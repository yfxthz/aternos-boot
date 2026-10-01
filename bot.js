const bedrock = require('bedrock-protocol');

const SERVER_HOST = 'asrdon.aternos.me'; // الـ IP ديالك
const SERVER_PORT = 19132;              // الـ Port ديالك

function connectBot() {
    console.log(`Connecting to ${SERVER_HOST}:${SERVER_PORT}...`);

    const client = bedrock.createClient({
        host: SERVER_HOST,
        port: SERVER_PORT,
        username: 'AFK_Bot_247',
        offline: true
    });

    client.on('spawn', () => {
        console.log('>>> Bot is INSIDE the server! Aternos stays ONLINE.');
    });

    client.on('error', (err) => {
        console.error('Connection error:', err.message);
    });

    client.on('close', () => {
        console.log('Disconnected. Reconnecting in 10 seconds...');
        setTimeout(connectBot, 10000);
    });
}

connectBot();
