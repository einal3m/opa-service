# OPA service

Learning OPA based on AWS blog post [Deploying Open Policy Agent (OPA) as a sidecar on Amazon Elastic Container Service (Amazon ECS)](https://aws.amazon.com/blogs/opensource/deploying-open-policy-agent-opa-as-a-sidecar-on-amazon-elastic-container-service-amazon-ecs/).

To run the service:

```
docker-compose up
```

To make a request to check authorization:

```
curl --location --request GET 'http://localhost:8000/request' --header 'group: Guest' --header 'resource: file1'
```
