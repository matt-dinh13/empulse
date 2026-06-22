---
type: Interface
stereotype: "resource"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-769 INSR - Custom data validation API"
domain: "Modules"
element_id: 1705474
diagrams: 12
connections: 18
tags:
  - interface
  - modules
---

# 🔶 InsurancePrograms

> **Type**: Interface · **Stereotype**: «resource»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-769 INSR - Custom data validation API

## 📝 Notes

Interface exposed for InsuranceProgram resource

## 🔗 Connections (14)

- ← Dependency: [[INSR (Insurance)]]
- → Dependency: [[11.050 Get Insurance Program detail service v2]]
- → Dependency: [[InsurancePrograms (Class 1705469)]]
- → Usage: [[DataEligibilityCheck_v3]]
- → Dependency: [[InsuranceProgramEligibilityResults]]
- → Dependency «path»: [[CustomDataDefinition (Interface 1705476)]]
- → Dependency: [[InsuranceProgramDetail]]
- → Dependency: [[11.200 Get Insurance Programs service]]
- → Dependency: [[11.124 Validate data eligibility for insurance (UseCase 1705435)]]
- → Dependency: [[GetInsuranceProgram]]
- → Dependency: [[DataEligibilityCheck]]
- → Usage: [[InsurancePrograms]]
- → Dependency: [[InsuranceProgramSearchFilter]]
- → Dependency «path»: [[EligibilityDefinition (Interface 1705475)]]

## 📊 Appears In (12 diagrams)

- Logical: CSI-769 INSR - Custom data validation API
- Logical: Data Eligibility Validation
- Logical: Data Eligibility Validation v2
- Logical: Data Eligibility Validation v3
- Logical: Getting Custom Data Definition v1
- Logical: Getting Eligibility definitions v1
- Logical: Getting Insurance Program data v1
- Logical: Getting Insurance Program data v2
- Logical: Getting Insurance Programs v1
- Logical: Getting Insurance Programs v2
- Logical: Resources
- Logical: Web Services - Resource overview
