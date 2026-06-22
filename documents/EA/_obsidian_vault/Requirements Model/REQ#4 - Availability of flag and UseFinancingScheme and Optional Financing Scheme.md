---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)"
domain: "Requirements Model"
element_id: 1285996
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#4 - Availability of flag and UseFinancingScheme and Optional Financing Scheme

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-701 Financing Schema II (CBL-1533)

## 📝 Notes

1) Allow set UseFinancingScheme = True for all REL products where Product.ProductProfile.IsDebit = False

2) Financing Package can be defined without reference to Financing Scheme. Such Packages will be used in Product Calculator for selection of RELs (by Commodity Type, Manufacturer and Model) where initial transaction is not required to be split into IP. A warning will be displayed at the moment of activation of such Financing Package.

## 📊 Appears In (1 diagrams)

- Custom: PCG-701 Financing Schema II (CBL-1533)
