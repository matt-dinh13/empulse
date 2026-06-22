---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Data Eligibility Validation"
domain: "Modules"
element_id: 1705454
diagrams: 3
connections: 3
tags:
  - class
  - modules
---

# 🔷 DataEligibilityResult

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Data Eligibility Validation

## 📝 Notes

Result of general data eligibility check

## 🔗 Connections (3)

- → Usage: [[ClientEligibilityResult]]
- ← Usage: [[InsuranceProgramEligibilityResults]]
- → Usage: [[CommodityDataResult]]

## 📊 Appears In (3 diagrams)

- Logical: Data Eligibility Validation
- Logical: Data Eligibility Validation v2
- Logical: Data Eligibility Validation v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commoditiesDataResults | CommodityDataResult |  |
| insuranceProgramExternalId | string |  |
| clientDataResult | ClientEligibilityResult |  |
| insuranceProgramCode | string |  |
| contractSumInsured | Money |  |
| resultCode | string |  |
| resultDescription | string |  |
