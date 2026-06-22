---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme"
domain: "Modules"
element_id: 1822514
diagrams: 3
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Subvention Discount definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme

## 📝 Notes

Subvention Discount is a subvention which decreases loan amount.  It is calculated only for loans with ProductType = CEL or SAI (= 0 for REL).

Subvention Discount = SubventionPartner(SPPAD) + SubventionManufacturer(SPMMAD) + SubventionHomeCredit(SHCAD), where Subvention.Purpose = STANDARD and SPPAD, SPMAD, SHCAD are defined by Subvention amount definition.

## 🔗 Connections (4)

- → Dependency: [[{MOD}Subvention amount definition]]
- ← Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- ← Dependency: [[{MOD}Subsidized Principal calculation]]
- ← Dependency: [[{MOD}Simple principal calculation]]

## 📊 Appears In (3 diagrams)

- Custom: Calculation of financial parameters of offer
- Custom: Financial calculations
- Custom: Subvention calculation
