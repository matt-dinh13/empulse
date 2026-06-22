---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13063 (CSI-631) Set up Loan Purpose & Registration process for ALOP/Extension of ALOP datasource"
domain: "Requirements Model"
element_id: 1617505
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Extension of ALOP Datasource 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13063 (CSI-631) Set up Loan Purpose & Registration process for ALOP/Extension of ALOP datasource

## 📝 Notes

HO_ALOP_DATA should be extended by following parts:
 

	
- loan purpose - it is stored in the ADS module as additionalData attribute (key+value), so the same structure linked to ALOPDocument is added
	
- related persons - it is provided from CIF as part of client (or applicant) data, so a new AdditionalPersons structure linked to client is added
	
- applicant data - applicant ID is stored in the ADS module, it is used to load applicant data from CIF and a new  applicantData structure linked to ALOPDocument is added

## 📊 Appears In (1 diagrams)

- Custom: Extension of ALOP datasource
