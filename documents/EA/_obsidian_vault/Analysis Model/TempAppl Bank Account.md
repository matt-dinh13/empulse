---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model"
domain: "Analysis Model"
element_id: 1771493
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 TempAppl Bank Account

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model

## 🔗 Connections (5)

- → Association: [[Bank Branch (Class 1761502)]]
- → Dependency: [[Account Type]]
- ← Aggregation: [[TempAppl Bank Account Verification]]
- ← Association: [[TempAppl Contract Bank Account]]
- ← Association: [[TempAppl Payment Channel]]

## 📊 Appears In (1 diagrams)

- Logical: Temporary Application - Payment Information

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Account Number | Account Number |  |
| Holder Name | Text |  |
| Type | Account Type |  |
