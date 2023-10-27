const contentType=require("./contentType");
const router={
    "GET":{},
    'POST':{}
};
exports.handle=(req,res)=>{
    try{
        if(router[req.method][req.url]){
            router[req.method][req.url](req,res);
        }else{
            res.writeHead(404,contentType.htmlContentType);
            res.end("<h1>No such file exists</h1>")
        }
    }catch(ex){
            console.log("error: "+ex);
    }
};
exports.get=(url,action)=>{
    router["GET"][url]=action;
};
exports.post=(url,action)=>{
    router["POST"][url]=action;
};