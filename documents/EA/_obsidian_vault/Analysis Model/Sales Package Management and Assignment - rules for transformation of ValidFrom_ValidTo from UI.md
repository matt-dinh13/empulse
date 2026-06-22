---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/User Interface"
domain: "Analysis Model"
element_id: 1280339
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Sales Package Management and Assignment - rules for transformation of ValidFrom/ValidTo from UI

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Sales Packages on Salesroom/User Interface

## 📝 Notes

Values 
- Sales Package Item.ValidFrom/To
- Salesroom To Sales Package.ValidFrom/To
are entered as Date in UI (UI.values) but required as DateTime (Req.values) in interface method for setting these values.

Transform entered UI.values to Req.values as follows:
Req.validTo = Date (UI.ValidTo) + 23:59:59
If Date(UI.ValidFrom) = current date then Req.validFrom = Current date + time + 10 seconds 
else
Req.validFrom = Date (UI.ValidFrom) + 00:00:00
Note: 10 second is technical delay for validation and processing

## 🔗 Connections (2)

- ← Dependency: [[Assign Sales Packages to Salesroom]]
- ← Dependency: [[Set Sales Package]]

## 📊 Appears In (2 diagrams)

- Custom: Assign Sales Package to Salesroom
- Custom: Set Sales Package
