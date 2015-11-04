FROM node:5-onbuild
RUN mkdir /var/www
ADD app.js /var/www/app.js

CMD ["/usr/bin/node", "/var/www/app.js"] 