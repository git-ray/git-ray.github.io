// 创建一个服务器对象工厂
const http= require('http');
// 创建服务器实例
   http.createServer(function(req,res){
   	// request response
   	  res.write('helloWorld');

   	  res.end('321');
 			
   }).listen(3012,'127.0.0.1');
   /*监听IP和端口  端口自必写  如果不IP默认 local本地的*/