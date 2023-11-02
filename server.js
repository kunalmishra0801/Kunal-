const http = require('http');

const server = http.createServer(serverCallback);

let a = [];

function serverCallback(req,res){
    const url = req.url;
    if(url == '/create'){
        a.push(1);
        res.write(JSON.stringify(a));
    }else if( url == '/update'){
        a.push(1);
        a[0] = 2;
        res.write(JSON.stringify(a));
    }else if( url == '/read'){
        res.write(JSON.stringify(a));
    }else if(url == '/delete' ){
         a.pop();
    }
    res.end();   
}
  



server.listen(3000,function(){
    console.log("Server started");
});
