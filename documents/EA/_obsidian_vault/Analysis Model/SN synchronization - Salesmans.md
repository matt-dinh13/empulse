---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules"
domain: "Analysis Model"
element_id: 1610882
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 SN synchronization - Salesmans

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules

## 📝 Notes

When a new salesman is obtained in the synchronization message (i.e. code of the salesman from the message is not found in system), a new salesman for salesroom is created according to data received. 
When an existing salesman is obtained in the synchronization message the current data of salesman are updated if differ to received data of salesman.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}SNM Partner and Salesroom Synchronization]]

## 📊 Appears In (3 diagrams)

- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
- Logical: SNM Salesroom Synchronization
