---
layout: page
title:  "Roles in Code for Fort Collins"
author: David Hayes
permalink: /roles/
---

# Code for Fort Collins Administrative Roles

Code for Fort Collins knows the value of good leadership and clear roles to allow people to feel empowered to do their best work. To that end, we're happy to maintain a team with two [Captains](/roles/captain/). 

Supporting them, we have [Meeting Leaders](/roles/meeting-leader/). Each project Code for Fort Collins does will have at least one [Project Leader](/roles/project-leader/), and may also ahve any number of [Teaching Team Members](/roles/teaching-team-member/) and [Team Members](/roles/team-member/).

## We have roles

{% for role in site.roles %}
	{% if role.path contains 'index' %}
		{% continue %}
	{% endif %}
* [{{role.title}}]({{role.url}})
{% endfor %}
