---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Packages/Validation Rules"
domain: "Modules"
element_id: 1865371
diagrams: 4
connections: 5
tags:
  - class
  - modules
---

# 🔷 Financing Package Flag Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Packages/Validation Rules

## 📝 Notes

Code list of Financing Package Flag Types used in particular system instance (country).
Can contain either 
- items from Financing Package Flag Type Definition 
- custom types not supported by HomerSelect, but used as mark for country specific purposes

## 🔗 Connections (5)

- ← Dependency: [[FinancingPackageFlagType]]
- ← Dependency: [[FinancingPackageFlag]]
- ← Dependency: [[Financing Package Flag (Class 1865378)]]
- → Dependency: [[Financing Package Flag Type Definition]]
- ← Dependency: [[{MOD}Financing package - validation]]

## 📊 Appears In (4 diagrams)

- Custom: Validation Rules
- Logical: Financing Package
- Logical: FinancingPackageValues
- Logical: GetFinancingPackageCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Active | boolean | true |
