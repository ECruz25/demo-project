FROM node:12
RUN npm install
CMD [ "node", "run", "test"]
