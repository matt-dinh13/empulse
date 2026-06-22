---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1879132
diagrams: 3
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 Product To Financing Package

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

Assignment of Financing Packages to product.
Relation between Product and Financing Package is done through FinancingPackage.Code.

## 🔗 Connections (3)

- ← Dependency «mapping»: [[{DEL}ProductFinancingPackageDataDto]]
- → Aggregation: [[{MOD}Product]]
- → Dependency: [[Financing Package (Class 1865395)]]

## 📊 Appears In (3 diagrams)

- Logical: CBL-1533 Adjust OFP
- Logical: Product data synchronization mapping
- Logical: Product Management

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Financing Package | Code |  |
