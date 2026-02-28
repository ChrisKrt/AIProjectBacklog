# Stage 1: Build
FROM node:20-alpine AS builder
RUN npm install -g pnpm

WORKDIR /app
COPY pnpm-workspace.yaml package.json ./
COPY Application/gui/package.json ./Application/gui/
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

# Stage 2: Runtime
FROM nginx:alpine AS runtime

# Copy nginx config
COPY Application/infrastructure/docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets
COPY --from=builder /app/Application/gui/dist /usr/share/nginx/html

# Copy entrypoint for runtime config injection (ADR-014)
COPY Application/infrastructure/docker/docker-entrypoint.sh /docker-entrypoint.d/40-inject-env.sh
RUN chmod +x /docker-entrypoint.d/40-inject-env.sh

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
