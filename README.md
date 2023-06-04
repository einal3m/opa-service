# OPA service

Learning OPA based on AWS blog post [Deploying Open Policy Agent (OPA) as a sidecar on Amazon Elastic Container Service (Amazon ECS)](https://aws.amazon.com/blogs/opensource/deploying-open-policy-agent-opa-as-a-sidecar-on-amazon-elastic-container-service-amazon-ecs/).

To run the service:

```
docker-compose up
```

To make a request to check authorization:

```
# luke is allowed to drive an x-wing
curl --request GET \
  --url http://localhost:8000/allow \
  --header 'Content-Type: application/json' \
  --data '{
	"resource": "spaceships",
	"type": "x-wing",
	"action": "drive",
	"userId": "luke"
}'

# han solo is not allowed to wield a lightsabre
curl --request GET \
  --url http://localhost:8000/allow \
  --header 'Content-Type: application/json' \
  --data '{
	"resource": "weapons",
  "type": "lightsaber",
	"action": "wield",
	"userId": "hansolo"
}'
```

OPA doesn't automatically reload policies. If you want to make changes to the policies, run the
following to upload the policies to OPA.

```
./upload_policies.sh
```
