module.exports = function(io){
  io.on('connection', (socket) => {
    // jb kio client ka server ka sath connection banta ha to. socket us connection ka object ha. 
    // console.log(`new connection ${socket}`)
    //  set is use for stores the value by the key.
    // output // Set(2) { 'TYIXnNIBbYC3FD0QAAAB', 'room1' } jb b connection banta ha to socket defoutlt room ma add ho jati ha. or us ka name soket ki id hota ha.
    socket.join("room1");
    socket.on('chat message', msg => {
      // console.log(socket.rooms);
      io.to("room1").emit('chat message', msg);
    });
  });
}