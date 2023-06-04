#!/bin/sh

curl -X PUT localhost:8181/v1/policies/policies/weapons.rego --data-binary @policies/weapons.rego
curl -X PUT localhost:8181/v1/policies/policies/spaceships.rego --data-binary @policies/spaceships.rego
