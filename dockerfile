FROM registry.access.redhat.com/ubi8/nodejs-16-minimal:1-39 as builder
COPY --chown=1001:1001 ./ $HOME
RUN npm i \
    && npm run build

ENTRYPOINT [ "/usr/bin/node", "build/" ]

# TODO: move the build files into a fresh container
#FROM registry.access.redhat.com/ubi8/nodejs-16-minimal:1-39
#COPY --from=builder --chown=1001:1001 $HOME/build $HOME

#ENTRYPOINT [ "/usr/bin/node", "$HOME" ]
#ENTRYPOINT [ "bash" ]
