FROM node:14

WORKDIR app/
 
COPY package.json package.json
COPY package-lock.json package-lock.json
 
CMD npm install
 
COPY . .

EXPOSE 8000
 
CMD [ "node", "server.js" ]