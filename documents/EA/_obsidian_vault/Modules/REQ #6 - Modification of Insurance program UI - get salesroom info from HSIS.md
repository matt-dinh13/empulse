---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-13 Insurance Program functionality - API"
domain: "Modules"
element_id: 1598785
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 REQ #6 - Modification of Insurance program UI - get salesroom info from HSIS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-13 Insurance Program functionality - API

## 📝 Notes

Currently, "insurance company" salesroom is obtained from BSL SNM domain as follow: get Salesroom (code + name) where Salesroom.Partner.Type = 'IC' and Salesroom.Status = Active
New solution: 

	
- we will get a list  "insurance company" salesrooms from HSIS by calling:
	
- the obtained info will be stored in the InsuranceProgram -> Salesroom entity (new one)
	
- remove bsl_insurance_program.PARTNER_CODE


Next, list of Professions for Ineligible profession assigning will be newly obtained from CSD

## 📊 Appears In (1 diagrams)

- Custom: CSI-13 Insurance Program functionality - API
