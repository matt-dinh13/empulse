---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Sales Network Management/{DEL}SalesroomWS/{DEL}AssignSalesAgent"
domain: "Analysis Model"
element_id: 1746858
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {DEL}AssignSalesAgentData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Sales Network Management/{DEL}SalesroomWS/{DEL}AssignSalesAgent

## 📝 Notes

{DEL PCG-3992/}

## 🔗 Connections (2)

- ← Dependency: [[{DEL}AssignSalesAgentRequest]]
- → Dependency: [[{DEL}AssignMode]]

## 📊 Appears In (1 diagrams)

- Logical: AssignSalesAgent

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serialNumber | integer |  |
| salesroomCode | string |  |
| salesAgentEmployeeNumber | string |  |
| validFrom | dateTime |  |
| validTo | dateTime |  |
| assignMode | {DEL}AssignMode |  |
