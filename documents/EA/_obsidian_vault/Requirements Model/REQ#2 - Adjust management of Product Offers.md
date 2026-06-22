---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-707 Financing Scheme III for CELs (CBL-1672)"
domain: "Requirements Model"
element_id: 1298467
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 - Adjust management of Product Offers

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-707 Financing Scheme III for CELs (CBL-1672)

## 📝 Notes

1) Disable change of Installment Schedule Method on Product Offer based on Financing Scheme

2) Preference of Product Offer will be filled from two sources:
- Product.ProductVariant.Preference for all RELs and CELs without Financing Scheme, defined as code (HIGH_PLUS, etc.)
- Product.FinancingPackage.FinancingPackageItem.Preference for CELs with Financing Scheme, defined as an integer, 1 is the lowest preference
Preference evaluated during product offer calculation will be saved in Offer Financial Parameters as integer to allow its easy processing (offer sorting, displaying of offer in UI). Preference defined as code will be transferred to integer.

## 📊 Appears In (1 diagrams)

- Custom: PCG-707 Financing Scheme III for CELs (CBL-1672)
