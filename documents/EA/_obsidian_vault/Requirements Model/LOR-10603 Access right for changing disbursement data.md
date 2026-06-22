---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10450 Do not allow to change the information to disburse after BOD2 and before sign"
domain: "Requirements Model"
element_id: 1833687
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-10603 Access right for changing disbursement data

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10450 Do not allow to change the information to disburse after BOD2 and before sign

## 📝 Notes

As a user, I will be able to change disbursement channel with beneficiary data only with specific right.

Proposed solution
Create new access right UC01_661_Beneficiary
Behavior of the the Change disbursement channel button in application detail:
 

	
- if user has basic right and target type <> BENEFICIARY_PERSON, then user will be able to click button and open edit window for disbursement channel
	
- if user has basic right and target type = BENEFICIARY_PERSON, then user will not be able to click button
	
- if user has basic right + new specific access right and target type = BENEFICIARY_PERSON, then user will be able to click button and open edit window for disbursement channel

## 🔗 Connections (1)

- → Realisation: [[LOR-10450 Do not allow to change the information to disburse after BOD2 and before sign (Requirement 1833688)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-10450 Do not allow to change the information to disburse after BOD2 and before sign
