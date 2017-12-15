FROM node:9.3.0

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /usr/src/app

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["start"]
