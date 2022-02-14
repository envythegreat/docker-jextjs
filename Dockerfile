FROM node:lts as dependencies
WORKDIR /nodestore
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /nodestore
COPY . .
COPY --from=dependencies /nodestore/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /nodestore
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /nodestore/next.config.js ./
COPY --from=builder /nodestore/public ./public
COPY --from=builder /nodestore/.next ./.next
COPY --from=builder /nodestore/node_modules ./node_modules
COPY --from=builder /nodestore/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]