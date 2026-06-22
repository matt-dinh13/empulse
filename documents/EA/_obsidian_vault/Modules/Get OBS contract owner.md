---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for CBS Adapter/Business rules"
domain: "Modules"
element_id: 1224426
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Get OBS contract owner

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for CBS Adapter/Business rules

## 📝 Notes

Input:

	
- HoSel contract owner
	
- 

Output:

	
- OBS contract owner code


Algorithm:

	
- System tries to find a record in ContractOwnerTranslation where Code = passed 'HoSel contract owner'.
	
- System returns:
- 'HoSel contract owner' in case that no record is found 
- Value of found record otherwise

## 📊 Appears In (1 diagrams)

- Custom: COMMON for CBSA - Business rules
