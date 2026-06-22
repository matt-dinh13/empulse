---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1627470
diagrams: 5
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Set salesroom's status to 'Closed'

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants

## 📝 Notes

Inputs:

	
- Salesroom


Steps:

	
- System sets end of salesroom's activity (SALESROOM.END_OF_ACTIVITY) to current date.
	
- If the salesroom's payment status is set to 'Allowed', system disables payments for the salesroom calling Algorithm: Set payment status for Salesroom to Disabled.
	
- System sets the salesroom's status, i.e. Salesroom.Status = 'Closed'.


Technical note: All steps have to be processed in one transaction.

## 🔗 Connections (4)

- ← Dependency: [[{MOD}Algorithm_ Set partners's status to 'Closed']]
- ← Dependency: [[09.260 Close salesroom manually]]
- ← Dependency: [[SN synchronization - Status]]
- → Dependency: [[Algorithm_ Set payment status for Salesroom to Disabled]]

## 📊 Appears In (5 diagrams)

- Custom: Salesroom Management -  business Rules
- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
- Use Case: Change Partner status
- Use Case: Change Salesroom status
