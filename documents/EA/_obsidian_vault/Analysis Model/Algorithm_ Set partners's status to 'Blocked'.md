---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1280893
diagrams: 4
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Set partners's status to 'Blocked'

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants

## 📝 Notes

- System sets Partner.Status = 'Blocked'.
	
- System blocks each partner's active salesroom using Algorithm: Set salesroom's status to 'Blocked' and generates a system event SalesroomChangedSE for each salesroom with processed salesroom ID.

## 🔗 Connections (3)

- → Dependency: [[Algorithm_ Set salesroom's status to 'Blocked']]
- ← Dependency: [[SN synchronization - Status]]
- ← Dependency: [[09.040 Block Partner manually]]

## 📊 Appears In (4 diagrams)

- Custom: Partner - Business Rules
- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
- Use Case: Change Partner status
