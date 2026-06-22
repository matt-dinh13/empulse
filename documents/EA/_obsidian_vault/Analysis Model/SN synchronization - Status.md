---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules"
domain: "Analysis Model"
element_id: 1610886
diagrams: 2
connections: 7
tags:
  - requirement
  - analysis-model
---

# 📋 SN synchronization - Status

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules

## 📝 Notes

When the status of an entity should be changed the following is done:
For salesroom:

	
- If the new status is 'Active': Algorithm: Set salesroom's status to 'Active'. Moreover, salesroom can be activated only if the related partner is in status 'Active'.
	
- If the new status is 'Blocked': Algorithm: Set salesroom's status to 'Blocked'.
	
- If the new status is 'Closed': Algorithm: Set salesroom's status to 'Closed'

For partner:

	
- If the new status is 'Active': Algorithm: Set partners's status to 'Active';
value of the attribute 'Activation time' from the synchronization message is ignored (the current time is used).


	
- If the new status is 'Blocked': Algorithm: Set partners's status to 'Blocked'
	
- If the new status is 'Closed': Algorithm: Set partners's status to 'Closed'

## 🔗 Connections (7)

- → Dependency: [[Algorithm_ Set partners's status to 'Active']]
- ← Dependency: [[{MOD}SNM Partner and Salesroom Synchronization]]
- → Dependency: [[Algorithm_ Set salesroom's status to 'Closed']]
- → Dependency: [[{MOD}Algorithm_ Set partners's status to 'Closed']]
- → Dependency: [[Algorithm_ Set salesroom's status to 'Active']]
- → Dependency: [[Algorithm_ Set partners's status to 'Blocked']]
- → Dependency: [[Algorithm_ Set salesroom's status to 'Blocked']]

## 📊 Appears In (2 diagrams)

- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
