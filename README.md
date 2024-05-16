server {
 listen 443 ssl ;
ssl_certificate /etc/nginx/ssl/kairaa.crt;
ssl_certificate_key /etc/nginx/ssl/kairaa.key;
 server_name commonapi.kairaaexchange.com;

 location / {
 try_files $uri $uri/ /index.html;

 location / {
 proxy_pass https://127.0.0.1:8967;
 proxy_http_version 1.1;
 proxy_set_header Upgrade $http_upgrade;
 proxy_set_header Connection "upgrade";
 proxy_set_header X-Forwarded-For $remote_addr;
 proxy_set_header Host $host;
 }
 }
 }
server {
    listen 80;
    server_name 44.215.22.90;
        root /var/www/html/testnet-explorer/dist;
        index index.html;

    location / {
        try_files $uri $uri / /index.html;
  }
}