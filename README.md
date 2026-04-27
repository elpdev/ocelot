<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Ocelot Global

Marketing site for Ocelot Global, packaged as an ONCE-compatible Docker app.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion

## Run Locally

Prerequisite: Node.js

1. Install dependencies:
   `npm install`
2. Start the dev server:
   `npm run dev`
3. Build the production bundle:
   `npm run build`

## Docker

This repository includes a Docker image that satisfies the ONCE app requirements:

- Serves HTTP on port `80`
- Health endpoint at `/up`
- Persistent storage mounted at `/storage`

Build the image:

`docker build -t ocelot-global .`

Run it:

`docker run --rm -p 80:80 -v ocelot-storage:/storage ocelot-global`

Health check:

`curl http://localhost/up`

## GHCR Image

- `ghcr.io/elpdev/ocelot:latest`
- `ghcr.io/elpdev/ocelot:v1.0.0`

## ONCE Deploy

Example deploy:

`once deploy ghcr.io/elpdev/ocelot:v1.0.0 --host ocelot-global.com`
