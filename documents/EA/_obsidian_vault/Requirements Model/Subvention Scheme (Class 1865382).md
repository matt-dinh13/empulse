---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5647 BRPH-2755 - Optimizing Subvention Management"
domain: "Requirements Model"
element_id: 1865382
diagrams: 7
connections: 7
tags:
  - class
  - requirements-model
---

# 🔷 Subvention Scheme

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/PCG/PH/PCG-5647 BRPH-2755 - Optimizing Subvention Management

## 📝 Notes

Definition of basic set of parameters for Subvention definition.

## 🔗 Connections (7)

- ← Dependency: [[SubventionScheme]]
- ← Dependency: [[{MOD}FinancingPackageSubvention]]
- → Dependency: [[Rounding (Enumeration 1238151)]]
- ← Dependency: [[Financing Package Subvention]]
- → Dependency: [[Rounding Scale Type]]
- → Dependency: [[Subvention Participant]]
- ← Dependency: [[{MOD}Financing package - validation]]

## 📊 Appears In (7 diagrams)

- Custom: PCG-5647 BRPH-2755 - Optimizing Subvention Management
- Custom: Validation Rules
- Logical: Financing Package
- Logical: FinancingPackageValues
- Logical: GetFinancingPackageCodeLists
- Logical: PCG-5647 BRPH-2755 - Optimizing Subvention Management
- Logical: Subvention Scheme

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Active | boolean | True |
| Is Default | boolean | False |
| Description | string |  |
| Participant | Subvention Participant |  |
| Discount | boolean | False |
| By Commodity Type | boolean | False |
| Rounding Method | Rounding |  |
| Rounding Scale | Rounding Scale Type |  |
