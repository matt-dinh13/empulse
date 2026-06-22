---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Data Eligibility Validation"
domain: "Modules"
element_id: 1705413
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 DataEligibilityCheck_v3

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Data Eligibility Validation

## 📝 Notes

{ADD CSI-1875 /}
A request structure for general data eligibility check of version #3

## 🔗 Connections (4)

- → Usage: [[InsuranceProgramEligibilityUsed]]
- → Usage: [[CommodityData]]
- → Usage: [[ClientData_v3]]
- ← Usage: [[InsurancePrograms (Interface 1705474)]]

## 📊 Appears In (1 diagrams)

- Logical: Data Eligibility Validation v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| commoditiesData | CommodityData |  |
| clientData | ClientData |  |
| insurancePrograms | InsuranceProgramEligibilityUsed |  |
| ignoreMissingValues | boolean |  |
| {MOD}contractSumInsured | Money |  |
| {MOD}clientSumInsured | Money |  |
| {ADD}customerId | string |  |
