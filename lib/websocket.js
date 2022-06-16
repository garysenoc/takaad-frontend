import { io } from 'socket.io-client'

// Socket Configuration
const config = {
	transports: ['websocket', 'polling', 'flashsocket'],
}

const socket = io(`${process.env.api_baseurl}`, config)

export default socket
