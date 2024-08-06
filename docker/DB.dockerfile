FROM mysql:8.4.2

COPY ["docker/DB_init.sh", "./docker-entrypoint-initdb.d"]

#CMD ["usr/bin/bash","/DB_init.sh"]