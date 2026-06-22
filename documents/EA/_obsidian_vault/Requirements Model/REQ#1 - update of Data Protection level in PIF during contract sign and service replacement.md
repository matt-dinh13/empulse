---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9350 (CLM-2872) Salary project extension - employee flag update and usage"
domain: "Requirements Model"
element_id: 1507986
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - update of Data Protection level in PIF during contract sign and service replacement

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9350 (CLM-2872) Salary project extension - employee flag update and usage

## 📝 Notes

Used for KZ Salary project - only if new global param UpdateDataProtectionLevelToCIF is set.

Data Protection level in PIF has to be set to HC_EMPLOYEE during contract sign if contract has assigned MTCACC service with For internal client attribute.
Data Protection level in PIF has to be set to HC_EMPLOYEE after service replacement if contract has assigned MTCACC service with For internal client attribute, or to DEFAULT if service with attribute does not exist.

System property UpdateDataProtectionLevelToCIF:
For all countries:
UpdateDataProtectionLevelToCIF = false (default)

for KZ: 
UpdateDataProtectionLevelToCIF = true

## 📊 Appears In (1 diagrams)

- Custom: CBL-9350 (CLM-2872) Salary project extension - employee flag update and usage
