FROM node

WORKDIR /comment

COPY package*.json ./

RUN npm install 

COPY ./ ./

EXPOSE 4001

CMD ["nodejs","index.js"]