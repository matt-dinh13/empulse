---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10550 PIF PII Data Masking & New Access Right "
domain: "Requirements Model"
element_id: 1833692
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-10351 BSL UI: integrate to /v2 PIF API

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10550 PIF PII Data Masking & New Access Right 

## 📝 Notes

As a user, I will see masked values in application detail based on my roles.

Proposed solution

	
- impacted UI
- sign screen
- initial client search
	
- integrate to new version of PIF API /v2/applicants/{externalId} (see https://git.homecredit.net/pif/pif-rest-client/-/blob/master/swagger-v2.json?ref_type=heads) 
	
- the entities newly contain attribute "maskedValues": {}, which contain masked values
	
- priorities of attributes - 1. masked value, 2. standard value
	
- impacted attributes
- client name - first name, last name, middle name
- date of birth
- mothers name
- address - any attribute
- contact - number, email

## 🔗 Connections (1)

- → Realisation: [[LOR-10550 PIF PII Data Masking & New Access Right (Requirement 1833691)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-10550 PIF PII Data Masking & New Access Right 
