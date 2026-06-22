---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model"
domain: "Analysis Model"
element_id: 1771477
diagrams: 3
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 TempAppl Card

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Logical Data Model

## 📝 Notes

Information about card.

## 🔗 Connections (4)

- → Usage: [[Card Delivery Type Option]]
- → Dependency «use»: [[Card issue method type]]
- → Dependency: [[Statement Channel]]
- → Aggregation: [[{MOD}Temporary Application]]

## 📊 Appears In (3 diagrams)

- Logical: Temporary Application - detail
- Logical: Temporary Application - overview
- Logical: Temporary Application - Payment Information

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Issue method | Card issue method type |  |
| Emboss name | text |  |
| Delivery Type | Card Delivery Type Option |  |
| Pick Up Salesroom Code | string |  |
