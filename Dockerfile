FROM oven/bun:1.3.1-alpine AS base
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Install with prod
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
# RUN bun test # <- do this when we get tests
RUN bun run build

FROM base AS release
# COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/.output/ ./

# Run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "server/index.mjs" ]
