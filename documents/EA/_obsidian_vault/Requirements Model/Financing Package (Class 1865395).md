---
type: Class
stereotype: "versioned"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1865395
diagrams: 3
connections: 8
tags:
  - class
  - requirements-model
---

# 🔷 Financing Package

> **Type**: Class · **Stereotype**: «versioned»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

Set of Financing Schemes addressed to financing of particular transaction defined by set of criterions.

## 🔗 Connections (8)

- → Generalization: [[Versioned entity]]
- ← Aggregation: [[Financing Package Subvention]]
- ← Aggregation: [[Financing Package Initial Payment Limit]]
- ← Aggregation: [[{MOD}Financing Package Criterion]]
- ← Aggregation: [[Financing Package Flag (Class 1865378)]]
- ← Aggregation: [[Financing Package Item]]
- ← Dependency: [[Offer Financial Parameter]]
- ← Dependency: [[Product To Financing Package]]

## 📊 Appears In (3 diagrams)

- Logical: CBL-1533 Adjust OFP
- Logical: Financing Package
- Logical: Product Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Description | string |  |
| Description Sale | string |  |
| Valid From | datetime |  |
| Valid To | datetime |  |
