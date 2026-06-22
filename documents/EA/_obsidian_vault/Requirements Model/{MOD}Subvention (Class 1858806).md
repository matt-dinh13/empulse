---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10332 Add Subvention Discount in Customer Offer REST response"
domain: "Requirements Model"
element_id: 1858806
diagrams: 9
connections: 13
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Subvention

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10332 Add Subvention Discount in Customer Offer REST response

## 📝 Notes

This class serves for definition of subventions for product.

## 🔗 Connections (13)

- → Dependency: [[Rounding (Enumeration 1238151)]]
- → Dependency: [[Subvention Participant]]
- → Dependency: [[{ADD}Model]]
- → Dependency: [[{MOD}Base Type]]
- → Dependency: [[Subvention Purpose]]
- → Dependency: [[{MOD}Base Type Usage]]
- → Dependency: [[Commodity Type (Class 1758904)]]
- → Dependency: [[{MOD}Base Type Usage]]
- ← Dependency «mapping»: [[{DEL}SubventionData]]
- ← Association: [[{MOD}Offer Subvention Item]]
- ← Association: [[{MOD}Product]]
- ← Association: [[FP Subvention Item]]
- → Aggregation: [[Service (Class 1880804)]]

## 📊 Appears In (9 diagrams)

- Custom: LOR-10332 Add Subvention Discount in Customer Offer REST response
- Custom: PCG-5647 BRPH-2755 - Optimizing Subvention Management
- Logical: Base Types
- Logical: Contract - Financial parameters
- Logical: Loan Service Structure
- Logical: Offer Financial Parameters
- Logical: Product data synchronization mapping
- Logical: Product Management
- Logical: Subventions

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Commodity Type | string |  |
| Participant | Subvention Participant |  |
| Allocation to Client | Percent |  |
| Discount | Boolean |  |
| Fixed Amount | Financial Amount |  |
| Percentage | Percent |  |
| Percentage Based on | Base Type |  |
| Rounding | Rounding |  |
| Rounding Scale | Rounding Scale Type |  |
| Code | int |  |
| Purpose | Subvention Purpose | STANDARD |
| Model Code | string |  |
| {ADD}Minimal Goods Price | int |  |
| {ADD}Maximal Goods Price | int |  |
| {ADD}Minimal Commodity Price | int |  |
| {ADD}Maximal Commodity Price | int |  |
| {ADD}Promo Action Code | string |  |
