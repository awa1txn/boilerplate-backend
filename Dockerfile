FROM node:20.10.0
 
WORKDIR /
 
COPY package.json package.json
COPY package-lock.json package-lock.json
 
RUN npm install
 
COPY . .
 
CMD [ "node", "server.js" ]