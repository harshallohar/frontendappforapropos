FROM node:18.14.0
# working dir
WORKDIR /react-app

ENV NODE_ENV=production

# Coping 
COPY package.json package-lock.json ./

# RUN npm install vite -g

RUN npm install --include=dev

COPY . ./react-app

EXPOSE 5173

CMD ["npm","run","dev"]

