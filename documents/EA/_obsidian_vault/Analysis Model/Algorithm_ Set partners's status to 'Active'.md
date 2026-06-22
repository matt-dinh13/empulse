---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1280894
diagrams: 4
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Set partners's status to 'Active'

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Partner/COMMON for Partner/Business Rules/Common for all variants

## 📝 Notes

System sets Partner.Status = "Active" and Partner.ActivationDate = "current date and time" and Partner.EndOfActivity = null.

## 🔗 Connections (2)

- ← Dependency: [[SN synchronization - Status]]
- ← Dependency: [[09.040 Activate Partner manually]]

## 📊 Appears In (4 diagrams)

- Custom: Partner - Business Rules
- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
- Use Case: Change Partner status
