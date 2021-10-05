#Inital build stage
FROM node:14-alpine as build
WORKDIR /src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install -g @angular/cli
RUN npm install --production --silent
COPY . ./
WORKDIR /Client
RUN npx ng build

# Second Stage
FROM nginx:latest-alpine 
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/* ./

EXPOSE 4200
