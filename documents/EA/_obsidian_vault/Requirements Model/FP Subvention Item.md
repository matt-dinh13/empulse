---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6340 (CLM-2208) Enhancements in homer system to accommodate two subvention rates/CBL-6340 (CLM-3148) Support two subvention rates in Financial Parameters and skip commodity validation with flag"
domain: "Requirements Model"
element_id: 1879582
diagrams: 4
connections: 3
tags:
  - class
  - requirements-model
---

# 🔷 FP Subvention Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6340 (CLM-2208) Enhancements in homer system to accommodate two subvention rates/CBL-6340 (CLM-3148) Support two subvention rates in Financial Parameters and skip commodity validation with flag

## 📝 Notes

The entity keeps a financial parameter item of the subvention type. It is concrete class of the Financial Parameter Item abstract class.

## 🔗 Connections (3)

- → Association: [[Contract Service (Class 1868570)]]
- → Generalization: [[Financial Parameter Item]]
- → Association: [[{MOD}Subvention (Class 1858806)]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-6340 (CLM-3148) Support two subvention rates in Financial Parameters and skip commodity validation with flag
- Custom: PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention
- Logical: Contract - Financial parameters
- Logical: Contract - Services

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Charged To Client | Financial Amount |  |
| Subvention Code | Code |  |
| Subvention Type | string |  |
| Participant Type | string |  |
| Discount | int |  |
| {ADD}Purpose | string |  |
