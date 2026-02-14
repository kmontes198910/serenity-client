ARG NODE_VERSION=22-alpine

# Base stage
FROM node:${NODE_VERSION} AS base
WORKDIR /app

# Dependencies stage - cache npm install layer
FROM base AS dependencies
COPY package.json package-lock.json* ./
RUN npm ci --ignore-scripts

# Builder stage - build the Nuxt application
FROM dependencies AS builder
WORKDIR /app
COPY . .
ENV NUXT_BUILD_ENV=docker
RUN npm run build

# Production stage - minimal image with only the Nitro output
FROM node:${NODE_VERSION} AS production
WORKDIR /app

# Copy only the self-contained Nitro server output
COPY --from=builder /app/.output ./.output

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Run as non-root user for security
USER node

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

CMD ["node", ".output/server/index.mjs"]
