---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model"
domain: "Analysis Model"
element_id: 1857176
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 Pairing Setting

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/COMMON for Installment Schedule/Logical Data Model

## 📝 Notes

Payment pairing settings for a specific T&C. This entity allows changing pairing priorities and settings without creating new T&C.

## 🔗 Connections (4)

- ← Association: [[Installment Priority]]
- → Dependency «use»: [[Installment Priority Method Type]]
- → Usage: [[Suppress due date method]]
- → Association: [[{MOD}Terms And Conditions]]

## 📊 Appears In (1 diagrams)

- Logical: Pairing priority

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Valid from | date |  |
| DPD limit | int |  |
| Write off threshold | int |  |
| Method type | Installment Priority Method Type |  |
| Code | string |  |
| Back to normal threshold | int |  |
| Termination Treshold | int |  |
| Suppress DD Method | Suppress Due Date Method |  |
