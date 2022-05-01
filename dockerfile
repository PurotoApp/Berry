FROM registry.access.redhat.com/ubi8/nodejs-16-minimal:1-39
COPY --chown=1001:1001 ./ .
RUN npm i \
    && npm run build
EXPOSE 3000
ENTRYPOINT [ "/usr/bin/node", "build/" ]
