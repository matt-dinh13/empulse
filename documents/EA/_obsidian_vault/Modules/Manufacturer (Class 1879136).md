---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Validation Rules"
domain: "Modules"
element_id: 1879136
diagrams: 9
connections: 10
tags:
  - class
  - modules
---

# 🔷 Manufacturer

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Validation Rules

## 📝 Notes

List of manufacturers - producers.

## 🔗 Connections (10)

- ← Dependency: [[Commodity Data from Manufacturer Definition]]
- ← Dependency: [[Manufacturer (Class 1509436)]]
- ← Dependency: [[Product Offer Request Commodity]]
- ← Dependency: [[Manufacturer (GUIElement 1721999)]]
- ← Dependency: [[{DEL}Manufacturer (Class 1816572)]]
- ← Dependency: [[{MOD}FinancingPackageValues - validation rules]]
- ← Dependency: [[{MOD}Financing Package Criterion Type]]
- ← Dependency: [[{MOD}Financing package - validation]]
- ← Dependency: [[{MOD}Commodity (Class 1879036)]]
- ← Association: [[Product To Manufacturer]]

## 📊 Appears In (9 diagrams)

- Custom: Financing Package Values - validation rules
- Custom: Validation Rules
- Logical: Commodity Data from Manufacturer
- Logical: CustomerOfferWS - GetCodeList
- Logical: Financing Package Criterion
- Logical: GetFinancingPackageCodeLists
- Logical: Product Management
- Logical: Product Offers generated for External system
- Logical: Temporary Application - Financial Parameters

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Name | Text |  |
| Active | Boolean | true |
