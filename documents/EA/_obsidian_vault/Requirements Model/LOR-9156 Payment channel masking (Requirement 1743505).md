---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9083 PII data masking on BSL"
domain: "Requirements Model"
element_id: 1743505
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9156 Payment channel masking

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9083 PII data masking on BSL

## 📝 Notes

As a user, I will see masked values of fields Account number and Account holder name of disbursement channel in application detail's payment channel tab.

Proposed solution:

	
- mask fields Account number and Account holder name 
	
- privileges:
- create access right for displaying unmasked values
- all countries - add this access right to roles with access right UC01_210
- ID - create a role BSL_UNMASKED_BANKACCOUNT with this new access right

## 🔗 Connections (1)

- → Realisation: [[LOR-9083 PII data masking on BSL]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9083 PII data masking on BSL
- Custom: LOR-9156 Payment channel masking
