---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10332 Add Subvention Discount in Customer Offer REST response"
domain: "Requirements Model"
element_id: 1878191
diagrams: 3
connections: 5
tags:
  - class
  - requirements-model
---

# 🔷 Offer Financial Parameter Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10332 Add Subvention Discount in Customer Offer REST response

## 📝 Notes

The entity keeps calculated items related to an offer as well as relation to item definition in specified entity (e.g. fee definition in the Tariff).

## 🔗 Connections (5)

- ← Generalization: [[{ADD} Offer Discount Item]]
- ← Generalization: [[Offer Tariff Item]]
- → Association: [[Financial Parameter Item Type]]
- ← Generalization: [[{MOD}Offer Subvention Item]]
- → Aggregation: [[Offer Financial Parameter]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-10332 Add Subvention Discount in Customer Offer REST response
- Logical: Offer Financial Parameters
- Logical: Temporary Application - Financial Parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Item Amount | Financial Amount |  |
