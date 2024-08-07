FROM mysql:latest

COPY ["docker/DB_init.sh", "./docker-entrypoint-initdb.d"]

#CMD ["usr/bin/bash","/DB_init.sh"]