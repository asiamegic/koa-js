<H1><b>Koa-JS - next generation web framework</H1></b>
This project demonstrates the creation of an application (web server) based on koa-js, which allows
run static web pages. also creating a docker file from a js script, as well as deploying it to kubernetes
with 3 replicas, logs and a load balancer<br><br><br>


Briefly about the package<br>
https://koajs.com/<br><br>
<hr>
Commands for creating a docker container<br>
<b>docker build -t koa-js .<br>
docker run -p 3000:3000 koa-js<br></b>
<hr>
Deploy to kubernetes<br>
<b>kubectl apply -f k8s_deploy.yml<br></b>
