---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model"
domain: "Analysis Model"
element_id: 1878164
diagrams: 1
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 Offer Card Service

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/Logical Data Model

## 📝 Notes

It presents an extension of Offer Service entity with payment card parameters of the offered card service.

## 🔗 Connections (5)

- → Dependency «use»: [[Card issue method type]]
- → Dependency: [[Card Issue Format Type]]
- → Dependency: [[Statement Channel]]
- → Dependency: [[{DEL}CustomerAdditionalData]]
- → Generalization: [[Offer Service (Class 1878189)]]

## 📊 Appears In (1 diagrams)

- Logical: Offer Service

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Card Number | string |  |
| Is Validated | boolean |  |
| Issue Method | Card issue method type |  |
| Issue Format | Card Issue Format Type |  |
| Holder Name | string |  |
| Expiration Date | date |  |
| Emboss Name | string |  |
| Delivery Type | Card Delivery Type Option |  |
| Statement Channel | Statement Channel |  |
| Salesroom Code | string |  |
