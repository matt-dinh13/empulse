---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model"
domain: "Analysis Model"
element_id: 1870764
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 COPExecutedSE

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Logical data model

## 📝 Notes

This system event is generated when Cooling-off period service is successfully executed on a contract without an existing COP loan service request.

## 🔗 Connections (3)

- → Association: [[Contract Service (Class 1868570)]]
- → Generalization: [[SystemEvent]]
- → InformationFlow: [[{DEL}01.252 Evaluate Contract Service Parameters]]

## 📊 Appears In (2 diagrams)

- Logical: Others
- Use Case: Contract finishing after DC recalculation
