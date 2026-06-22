---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1627484
diagrams: 4
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Set salesroom's status to 'Active'

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants

## 📝 Notes

Inputs:

	
- Salesroom


Steps:

	
- System sets:
- the Salesroom's status (SALESROOM.STATUS) to Active
- date of activation (SALESROOM.ACTIVATION_DATE) to current date.
- SALESROOM.END_OF_ACTIVITY = null

## 🔗 Connections (2)

- ← Dependency: [[09.260 Activate salesroom manually]]
- ← Dependency: [[SN synchronization - Status]]

## 📊 Appears In (4 diagrams)

- Custom: Salesroom Management -  business Rules
- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
- Use Case: Change Salesroom status
