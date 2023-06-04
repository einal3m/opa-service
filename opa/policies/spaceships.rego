package spaceships

import future.keywords.in

default allow = false

allow {
	input.type == "x-wing"
	input.action == "drive"

	"rebels" in data.roleAssignments[input.userId].groupMemberships
}

allow {
	input.type == "millenium-falcon"
	input.action == "drive"

	"smugglers" in data.roleAssignments[input.userId].groupMemberships
}
