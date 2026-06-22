---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-707 Financing Scheme III for CELs (CBL-1672)"
domain: "Requirements Model"
element_id: 1298466
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#3 - Adjust Offer Calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-707 Financing Scheme III for CELs (CBL-1672)

## 📝 Notes

Consolidate algorithm for Product Offer calculation with Financing Scheme, allow also for CEL products.
Use definition for Cash/Down Payment Limits from Financing Package instead from Product Variant.
For each REL Product Generate offers just from one Product Variant (the first eligible with respect to preference).
Note: 
To eliminate impact of CBL-1672 on other teams, Subventions for initial transaction remain to be calculated based on Product definition. 
In near future, it is intended to calculate Subventions for initial transaction based on their definition on Financing Package. For such adjustment has to be defined separate CBL.

## 📊 Appears In (1 diagrams)

- Custom: PCG-707 Financing Scheme III for CELs (CBL-1672)
