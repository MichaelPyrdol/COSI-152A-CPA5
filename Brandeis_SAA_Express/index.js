const port = 8080;
const http = require("http");
const contentType=require("./contentType");
const util=require("./util");
router=require("./router")
fs=require("fs"),
router.get("/",(req,res)=>{
    res.writeHead(200,htmlContentType);
    customReadFile("views/index.html",res)
});
router.get("/index.html",(req,res)=>{
    res.writeHead(200,htmlContentType);
    customReadFile("views/index.html",res)
});
router.get("/about.html",(req,res)=>{
    res.writeHead(200,htmlContentType);
    customReadFile("views/about.html",res)
});
router.get("/jobs.html",(req,res)=>{
    res.writeHead(200,htmlContentType);
    customReadFile("views/jobs.html",res)
});
router.get("/event.html",(req,res)=>{
    res.writeHead(200,htmlContentType);
    customReadFile("views/event.html",res)
});
router.get("/contact.html",(req,res)=>{
    res.writeHead(200,htmlContentType);
    customReadFile("views/contact.html",res)
});
router.get("/public/css/style.css",(req,res)=>{
    res.writeHead(200,cssContentType);
    customReadFile("public/css/style.css",res)
});
router.get("/public/images/BrandeisLogo.png",(req,res)=>{
    res.writeHead(200,cssContentType);
    customReadFile("public/images/BrandeisLogo.png",res)
});
router.post("/",(req,res)=>{
    res.writeHead(200,plainTextContentType);
    res.end("POSTED");
});
http.createServer(router.handle).listen(8080);
console.log(`The server is listening on port number:${port}`);