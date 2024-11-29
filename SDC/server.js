javaScript 
//server.js
const http =require('http');
const os =require('os');
const path =require('path');
const EventtEmitter =require('events');
class MyEmitter extends EventEmitter{}
const myEmitter =new MyEmitter();
myEmitter.on('log'(message)=>{
    console.log('[log']:${message});
});
const server = http.createServer(req,res)=>{
    myEmmiter.emit('log','Request recived:${req.method'}$(req.url});
    const filePpath=path.join(_dirname ,'public',req.url=='/'?'index.html':req.url);
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end('<h1>Welcome to the Custom SERver!<h1>');

    }else if (req.url==='/os-info'){
        const osinfo={
            platform:os.platform(),
            cpus:os.cpus().length, 
            arch:os.arch(),
            freememory:os.freemem(),
            totalMemory:os.totalmem(),
            uptime:os.uptime(),

        };
        res.writeHead(200,{'Content-Type':'appliction/json'});
        res.end(JOSON.stringify(osinfo,null,2));
    }else{
        res.writeHead(404,{'content-Type':'text/plain'});
        res.end('404 Not FOund');

    }
});
const PORT=process.env.PORT||3000;
server.listen(PORT,()=>{
    console.log('SEver reunning on http://localhost:${PORT}');
});