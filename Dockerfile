FROM node:14-alpine
COPY . .
RUN npm install koa koa-static
EXPOSE 3000
CMD ["node", "koa.js"]