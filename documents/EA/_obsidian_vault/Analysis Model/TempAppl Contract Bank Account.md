---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model"
domain: "Analysis Model"
element_id: 1771469
diagrams: 3
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 TempAppl Contract Bank Account

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model

## 📝 Notes

Client's bank account

## 🔗 Connections (4)

- → Association: [[TempAppl Bank Account]]
- → Dependency: [[Bank Account Role]]
- → Dependency: [[Debiting Method Type]]
- → Aggregation: [[{MOD}Temporary Application]]

## 📊 Appears In (3 diagrams)

- Logical: Temporary Application - detail
- Logical: Temporary Application - overview
- Logical: Temporary Application - Payment Information

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Debiting method | Debiting Method Type |  |
| Purpose | Bank Account Role |  |
| Limit | Financial Amount |  |
