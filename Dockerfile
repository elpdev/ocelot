FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV STORAGE_PATH=/storage

LABEL org.opencontainers.image.title="ocelot"
LABEL org.opencontainers.image.description="Ocelot packaged as an ONCE-compatible Docker app"
LABEL org.opencontainers.image.source="https://github.com/elpdev/ocelot"
LABEL org.opencontainers.image.vendor="elpdev"

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=build /app/dist ./dist
COPY server.js ./server.js

RUN mkdir -p /storage

EXPOSE 80
VOLUME ["/storage"]

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/up >/dev/null || exit 1

CMD ["npm", "run", "start"]
