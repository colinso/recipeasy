FROM alpine
COPY . .
RUN node ./index.js
