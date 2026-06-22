---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1280895
diagrams: 4
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Algorithm: Set partners's status to 'Closed'

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants

## 📝 Notes

- If the partner’s payment status (Partner.Payment_Status) is set to "Allowed", system changes it using Algorithm: Set payment status for Partner to Disabled.
	
- For each partner's salesroom in status 'Active' or 'Blocked':
- system closes the salesroom using Algorithm: Set salesroom's status to 'Closed'
- generates a system event SalesroomChangedSE for each salesroom with processed salesroom ID.
	
- System sets Partner.Status = "Closed" and Partner.EndOfActivity = "current date and time".

## 🔗 Connections (4)

- → Dependency: [[Algorithm_ Set salesroom's status to 'Closed']]
- → Dependency: [[Algorithm_ Set payment status for Partner to Disabled]]
- ← Dependency: [[SN synchronization - Status]]
- ← Dependency: [[09.040 Close Partner manually]]

## 📊 Appears In (4 diagrams)

- Custom: Partner - Business Rules
- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
- Use Case: Change Partner status
