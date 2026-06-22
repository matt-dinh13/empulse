---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model"
domain: "Analysis Model"
element_id: 1860893
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Verification

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account transaction/Logical data model

## 📝 Notes

Verification of object performed by SMS sent on the mobile phone

## 🔗 Connections (2)

- → Aggregation: [[Account Transaction]]
- → Dependency: [[Verification Result]]

## 📊 Appears In (1 diagrams)

- Logical: Account transaction - Logical data model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Result | Verification Result |  |
| Valid to | DateTime |  |
| External ID | Text |  |
| Remaining Attempts | int |  |
| Contact Value | string |  |
| Last Verification Attempt | DateTime |  |
