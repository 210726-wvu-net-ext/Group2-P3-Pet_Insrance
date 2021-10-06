#Inital build stage
FROM node:14-alpine as build
WORKDIR /src/app
COPY ["package.json", "package-lock.json*", "./"]
#Restore
RUN npm ci
COPY [ ".", "./" ]
RUN npx ng build

# Second Stage
FROM nginx:1.20
WORKDIR /usr/share/nginx/html
#Remove default page
RUN rm -rf *
#Link configuring
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/* ./

