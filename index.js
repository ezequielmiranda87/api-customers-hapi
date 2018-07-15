'use strict'
process.openStdin();

const Hapi = require('hapi')

// Create a serve with a host and port
const server = Hapi.server({
    host: 'localhost',
    port: 4000
})

// Add the route

server.route({
    method: 'GET',
    path: '/user',
    handler: function(request, h){
        const users = [
            {username: 'ezex', mail: 'ezequielmiranda87@gmail.com', age: 30, interest:['Music', 'Programation','Drugs'] },
            {username: 'ezex', mail: 'ezequielmiranda87@gmail.com', age: 30, interest:['Music', 'Programation','Drugs'] },
            {username: 'ezex', mail: 'ezequielmiranda87@gmail.com', age: 30, interest:['Music', 'Programation','Drugs'] },
            {username: 'ezex', mail: 'ezequielmiranda87@gmail.com', age: 30, interest:['Music', 'Programation','Drugs'] },
            {username: 'ezex', mail: 'ezequielmiranda87@gmail.com', age: 30, interest:['Music', 'Programation','Drugs'] },
            {username: 'ezex', mail: 'ezequielmiranda87@gmail.com', age: 30, interest:['Music', 'Programation','Drugs'] },
        ]
        return users;
    }
})

server.route({
    method: 'POST',
    path: '/user',
    handler: function(request, h){
    }
})

// Start the server

async function start2(){
    try {
        throw 'Wachinnnnngg'
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1)
    }
    console.log('server runing at:', server.info.uri)
}


async function start(){
    await server.start();
    console.log('server runing at:', server.info.uri)
}

process.on('unhandledRejection', (err)=>{
    console.log({message:'Tuviste un error', err: err})
})

start()