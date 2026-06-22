---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Data Eligibility Validation"
domain: "Modules"
element_id: 1705409
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 DataEligibilityCheck

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Data Eligibility Validation

## 📝 Notes

A request structure for general data eligibility check

## 🔗 Connections (4)

- → Dependency: [[CommodityData]]
- → Usage: [[InsuranceProgramEligibilityUsed]]
- → Dependency: [[ClientData]]
- ← Dependency: [[InsurancePrograms (Interface 1705474)]]

## 📊 Appears In (2 diagrams)

- Logical: Data Eligibility Validation
- Logical: Data Eligibility Validation v2

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commoditiesData | CommodityData |  |
| clientData | ClientData |  |
| insurancePrograms | InsuranceProgramEligibilityUsed |  |
| ignoreMissingValues | boolean |  |
