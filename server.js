const WebSocketServer = require('ws').Server

const wss = new WebSocketServer({port: 4300})

wss.on('connection', (ws) => {
    ws.on('message', data => {
        console.log(`received ${data}`)
        const { type, from, message } = JSON.parse(data);
        if (type === 'message') {
            const event = JSON.stringify({
                type: '[Chat] Add message',
                from,
                message
            });

            // That's the same as `broadcast`
            // we want to send message to all connected
            // to the chat clients
            wss.clients.forEach(client => {
                client.send(event);
            });
        }
    })
    console.log(`connected to the east of missouri`)
})