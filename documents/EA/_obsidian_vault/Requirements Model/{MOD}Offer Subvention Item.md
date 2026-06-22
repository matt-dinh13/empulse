---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10332 Add Subvention Discount in Customer Offer REST response"
domain: "Requirements Model"
element_id: 1878192
diagrams: 3
connections: 5
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Offer Subvention Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10332 Add Subvention Discount in Customer Offer REST response

## 📝 Notes

The entity keeps an offer financial parameter item of the subvention type. It is concrete class of the Offer Financial Parameter Item abstract class.

## 🔗 Connections (5)

- → Dependency: [[Subvention Participant]]
- → Association: [[Financing Package Subvention]]
- → Association: [[{MOD}Subvention (Class 1858806)]]
- → Generalization: [[Offer Financial Parameter Item]]
- ← Generalization: [[Offer Service Subvention Item]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-10332 Add Subvention Discount in Customer Offer REST response
- Logical: Offer Financial Parameters
- Logical: Temporary Application - Financial Parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Charged To Client | Financial Amount |  |
| Subvention Code | string |  |
| Subvention Type | string |  |
| Participant Type | Subvention Participant |  |
| Discount | boolean |  |
| {ADD}Purpose | Subvention Purpose |  |
