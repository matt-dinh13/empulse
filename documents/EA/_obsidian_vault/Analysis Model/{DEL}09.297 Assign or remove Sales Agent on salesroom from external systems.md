---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales agents on Salesroom /Access Rights"
domain: "Analysis Model"
element_id: 1746940
diagrams: 3
connections: 7
tags:
  - usecase
  - analysis-model
---

# 🎯 {DEL}09.297 Assign or remove Sales Agent on salesroom from external systems

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales agents on Salesroom /Access Rights

## 📝 Notes

{DEL PCG-3992/}
This use case describes how BSL updates Sales Agent data on salesroom according to request from external systems.

## 🔗 Connections (5)

- ← Realisation: [[{DEL}SalesroomWS (Interface 1746849)]]
- → Realisation: [[REQ#1 - Create new interface SalesroomWS]]
- → Dependency: [[{DEL}AssignSalesAgentRequest - validation rules]]
- → Realisation: [[09.297 Assign or remove Sales Agent from external systems]]
- ← Association: [[External system (Actor 1880866)]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Logical: AssignSalesAgent
- Use Case: {DEL}Manage Sales agents on Salesroom from external systems
