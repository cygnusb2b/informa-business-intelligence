FROM node:10.15
ENV NODE_ENV production
ADD ./ /root
WORKDIR /root

RUN yarn --production

WORKDIR /root/services/gam
ENTRYPOINT [ "node", "src/index.js" ]
