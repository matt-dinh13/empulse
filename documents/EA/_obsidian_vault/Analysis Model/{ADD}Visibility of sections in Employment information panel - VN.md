---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/VN"
domain: "Analysis Model"
element_id: 1860536
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Visibility of sections in Employment information panel - VN

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/VN

## 📝 Notes

{ADD LOR-10971/}
This  rule describes decision about required employer on application.

Value for required employer is taken from UI application form configuration.

- EMPLOYED, SELFEMPLOYED, STUDENT as default for all application forms
- EMPLOYED for application forms for 1CLICK

## 🔗 Connections (2)

- ← Dependency: [[Employment information VN (GUIElement 1860535)]]
- → Generalization: [[Visibility of sections in Employment information panel]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules VN
- Custom: Employment information VN
