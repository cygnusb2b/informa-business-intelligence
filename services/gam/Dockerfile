FROM node:10.15 as build
WORKDIR /root
ENV NODE_ENV production

ADD package.json yarn.lock /root/
ADD packages /root/packages
ADD services/gam /root/services/gam
RUN yarn --production --pure-lockfile

FROM node:10.15-alpine
ENV NODE_ENV production
ENV PORT 80
COPY --from=build /root /root
WORKDIR /root/services/gam
ENTRYPOINT [ "node", "index.js" ]
