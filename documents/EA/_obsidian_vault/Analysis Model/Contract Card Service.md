---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model"
domain: "Analysis Model"
element_id: 1868550
diagrams: 4
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Contract Card Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model

## 📝 Notes

It presents an extension of Contract Service entity with payment card parameters of the card service accepted by client.

## 🔗 Connections (3)

- → Dependency: [[Card Issue Format Type]]
- → Dependency: [[Card issue method type]]
- → Generalization: [[Contract Service (Class 1868570)]]

## 📊 Appears In (4 diagrams)

- Logical: Contract - Services
- Logical: Contract Service
- Logical: COS - LDM changes
- Logical: COS - LDM changes

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Card Number | string |  |
| Issue Method | Card issue method type |  |
| Issue Format | Card Issue Format Type |  |
| Holder Name | string |  |
| Expiration Date | date |  |
| Salesroom Code | string |  |
