---
type: Interface
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Sales Network Management/{DEL}SalesroomWS/{DEL}GetSalesroomForProduct"
domain: "Analysis Model"
element_id: 1746849
diagrams: 3
connections: 10
tags:
  - interface
  - analysis-model
---

# 🔶 {DEL}SalesroomWS

> **Type**: Interface
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Sales Network Management/{DEL}SalesroomWS/{DEL}GetSalesroomForProduct

## 📝 Notes

{DEL PCG-3992/}
Interface for salesroom data management

## 🔗 Connections (6)

- → Dependency: [[{DEL}AssignSalesAgentRequest]]
- → Dependency: [[{DEL}GetSalesroomForProductResponse]]
- → Realisation: [[{DEL}09.273 Get List of Salesrooms by product code]]
- → Realisation: [[{DEL}09.297 Assign or remove Sales Agent on salesroom from external systems]]
- → Dependency: [[{DEL}AssignSalesAgentResponse]]
- → Dependency: [[{DEL}GetSalesroomForProductRequest]]

## 📊 Appears In (3 diagrams)

- Logical: {DEL}GetSalesroomForProduct
- Logical: {DEL}SalesroomWS
- Logical: AssignSalesAgent
