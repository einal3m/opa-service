FROM openpolicyagent/opa:0.52.0-static

COPY ./policies/* /policies/
COPY ./data/* /data/

CMD [ "run", "--server", "--log-level", "debug", "--disable-telemetry", "/data", "/policies"]
