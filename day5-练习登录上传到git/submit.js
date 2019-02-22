var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
	var obj=url.parse(req.url,true).query
	if (obj.username=="name"&&obj.password=="123456") {
		res.end("登录成功")
	} else{
		res.end("登录失败")
	}
	res.end(obj.username+obj.password)
}).listen(3000)
