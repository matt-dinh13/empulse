---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9912 PIF PII Data Masking & New Access Right - Loan Origination/LOR-10198 Integration to new version of PIF endpoint"
domain: "Requirements Model"
element_id: 1827662
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-10198 Integration to new version of PIF endpoint

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9912 PIF PII Data Masking & New Access Right - Loan Origination/LOR-10198 Integration to new version of PIF endpoint

## 📝 Notes

As a user, I will see masked values in application detail based on my roles.

Proposed solution

	
- integrate to new version of PIF API /v2/applicants/{externalId} (see https://git.homecredit.net/pif/pif-rest-client/-/blob/master/swagger-v2.json?ref_type=heads) 
	
- the entities newly contain attribute "formatedValues": {}, which contain masked values
	
- priorities of attributes - 1. formated value, 2. standard value
	
- impacted attributes
- client name - first name, last name, middle name
- date of birth
- mothers name
- address - any attribute
- contact - number, email

## 🔗 Connections (1)

- → Realisation: [[LOR-9912 PIF PII Data Masking & New Access Right - Loan Origination (Requirement 1827660)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-10198 Integration to new version of PIF endpoint
- Custom: LOR-9912 PIF PII Data Masking & New Access Right - Loan Origination
