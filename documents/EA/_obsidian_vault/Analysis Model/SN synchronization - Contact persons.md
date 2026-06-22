---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules"
domain: "Analysis Model"
element_id: 1610888
diagrams: 4
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 SN synchronization - Contact persons

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules

## 📝 Notes

For Saleroom:

	
- At least one contact person of type = 'SHOPMAN' is mandatory in status 'Active'

For Partner:

	
- At least one contact person of type COMPDIR='Company director' is mandatory in status "Active";


If an object breaks this rule during synchronization, system logs an error and skips whole synchronization of the given object.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}SNM Partner and Salesroom Synchronization]]

## 📊 Appears In (4 diagrams)

- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization
