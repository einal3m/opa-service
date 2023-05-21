# Build OPA Service directory, load policies and data, install and run OPA daemon
FROM alpine:latest
RUN apk --no-cache add curl  
ADD $PWD/data /data
VOLUME /data 
RUN curl -L -o opa https://openpolicyagent.org/downloads/latest/opa_linux_amd64_static
RUN chmod 755 ./opa 
EXPOSE 8181
CMD ./opa run -s ./data --skip-version-check
