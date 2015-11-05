FROM node:latest
MAINTAINER johannes.bertens@gmail.com
ADD app.js .

CMD ["node", "app.js"] 
