FROM node:8
ADD . /
WORKDIR /
RUN npm install
EXPOSE 8080
CMD [ "npm", "start" ]