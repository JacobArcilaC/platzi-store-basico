FROM node:12 as node

COPY ["./","/app"]

WORKDIR /app

RUN npm install

RUN npm run build

FROM nginx
COPY --from=node ["/app/dist", "/usr/share/nginx/html"]