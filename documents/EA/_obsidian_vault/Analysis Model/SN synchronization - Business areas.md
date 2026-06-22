---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules"
domain: "Analysis Model"
element_id: 1610885
diagrams: 4
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 SN synchronization - Business areas

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules

## 📝 Notes

When a new business area is obtained in the synchronization message (i.e. code of the business area from the message is not found in system), a new record in the code list is created (the name is used for all localizations).
When an existing business area is obtained in the synchronization message the current name of area is updated if differs to received name of area (the name is used for all localizations).

## 🔗 Connections (1)

- ← Dependency: [[{MOD}SNM Partner and Salesroom Synchronization]]

## 📊 Appears In (4 diagrams)

- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization
