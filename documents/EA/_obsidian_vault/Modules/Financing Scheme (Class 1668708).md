---
type: Class
stereotype: "versioned"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Validation Rules"
domain: "Modules"
element_id: 1668708
diagrams: 7
connections: 11
tags:
  - class
  - modules
---

# 🔷 Financing Scheme

> **Type**: Class · **Stereotype**: «versioned»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Validation Rules

## 📝 Notes

Defines set of financial parameters necessary for generation of particular installment schedule.

## 🔗 Connections (11)

- ← Dependency: [[FinancingScheme]]
- ← Dependency: [[FinancingPackageItem]]
- → Dependency: [[{MOD}Tariff]]
- → Generalization: [[Versioned entity]]
- → Dependency: [[CoolingOff Period Scheme]]
- ← Aggregation: [[{MOD}Financing Scheme Variant]]
- → Dependency: [[Installment Plan Scheme]]
- ← Dependency: [[{MOD}FinancingPackageValues - validation rules]]
- ← Dependency: [[Financing Package Item]]
- ← Dependency: [[{MOD}Financing package - validation]]
- ← Dependency: [[Offer Financial Parameter]]

## 📊 Appears In (7 diagrams)

- Custom: Financing Package Values - validation rules
- Custom: Validation Rules
- Logical: CBL-1533 Adjust OFP
- Logical: Financing Package
- Logical: Financing Scheme
- Logical: FinancingPackageValues
- Logical: GetFinancingPackageCodeLists

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Description | string |  |
| Description Sale | string |  |
| Valid From | datetime |  |
| Valid To | datetime |  |
| Currency | Currency |  |
| Minimal Transaction Amount | decimal |  |
| Maximal Transaction Amount | decimal |  |
| Installment Plan Scheme | string |  |
| CoolingOff Period Scheme | string |  |
| Tariff | string |  |
