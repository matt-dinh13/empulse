---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10332 Add Subvention Discount in Customer Offer REST response"
domain: "Requirements Model"
element_id: 1865397
diagrams: 5
connections: 7
tags:
  - class
  - requirements-model
---

# 🔷 Financing Package Subvention

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10332 Add Subvention Discount in Customer Offer REST response

## 📝 Notes

This class defines parameters for calculation of Subventions on Financing Package level.

## 🔗 Connections (7)

- → Dependency: [[Commodity Type (Class 1758904)]]
- → Dependency: [[{MOD}Base Type]]
- → Dependency: [[{MOD}Base Type Usage]]
- → Aggregation: [[Financing Package (Class 1865395)]]
- → Dependency: [[Subvention Purpose]]
- → Dependency: [[Subvention Scheme (Class 1865382)]]
- ← Association: [[{MOD}Offer Subvention Item]]

## 📊 Appears In (5 diagrams)

- Custom: LOR-10332 Add Subvention Discount in Customer Offer REST response
- Custom: PCG-5647 BRPH-2755 - Optimizing Subvention Management
- Logical: Base Types
- Logical: Financing Package
- Logical: Offer Financial Parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Subvention Scheme | string |  |
| Commodity Type | string |  |
| Fixed Amount | Financial Amount |  |
| Percentage | Percent |  |
| Code | String |  |
| Percentage based on | String |  |
| Allocation to client | Percent |  |
| Purpose | Subvention | STANDARD |
