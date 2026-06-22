---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities"
domain: "Modules"
element_id: 1654079
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 REQ #1 - CSI-769 INSR - Custom data validation API

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities

## 📝 Notes

The Custom Data Type library already used in the DMS component will be used for INSR Custom data as well 

Data model change:

	
- The current BSL_INSUR_CUST_DATA_DEF table should be extended with properties needed for customer data validation (i.e. reference to Custom Data Type library,  min/max string length, min/max value for number values, mandatory/optional) - similar to attribute table in the DMS
	
- On custom data setting via UI, the new BSL_INSUR_CUST_DATA_DEF properties will be filled in based on some values from HO.BSL_CUSTOM_DATA_DEF
	
- Change of the current Insurance Program UI for adding custom data is not involved into scope of this task.
	
- The current BSL_CUSTOM_DATA_DEF_4_INSR isn't used for a validation of the INSR Custom data (checked with LOR and PCG teams) so it can be checked (There would be a check on our side, if CSI/INR doesn't use it as well)


Web service change

	
- the current REST API INSR Get Insurance Program and Find Insurance Program (both with CUSTOM_DATA/FULL projection) will be updated so that the custom data structure  returns validation rules similar to the DMS validation rules for document attributes

## 📊 Appears In (1 diagrams)

- Custom: CBL-8512 CLM Modularization - Insurance Program functionalities
