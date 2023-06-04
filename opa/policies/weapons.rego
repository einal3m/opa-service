package weapons

import future.keywords.in

default allow = false

allow {
	input.type == "blaster"
	input.action == "wield"
}

allow {
	input.type == "blaster"
	input.action == "give"

	"rebels" in data.roleAssignments[input.userId].leader.leaderScopes
}

allow {
	input.type == "lightsaber"
	input.action == "wield"

	"jedis" in data.roleAssignments[input.userId].groupMemberships
}

allow {
	input.type == "lightsaber"
	input.action == "give"

	"jedis" in data.roleAssignments[input.userId].leader.leaderScopes
}
