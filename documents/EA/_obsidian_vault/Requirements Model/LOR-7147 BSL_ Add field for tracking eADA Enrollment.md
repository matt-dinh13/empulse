---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-7147 BSL: Add field for tracking eADA Enrollment"
domain: "Requirements Model"
element_id: 1735590
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-7147 BSL: Add field for tracking eADA Enrollment

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-7147 BSL: Add field for tracking eADA Enrollment

## 📝 Notes

Proposed solution:
 

	
- creation of DDM via new REST method exposed by PAYM team instead of db call
	
- new field which indicates type of DDM from codelist on UI and store in TA (because DDM doesn't support DDM without contract)
	
- remove mandatority for all API app forms and DDM must be created by mobile app directly in PAYM module (the same approach as IN uses)
	
- add field on DDM tab of application detail
	
- storage of application_2_DDM
	
- create/update/get REST DDM on application detail (tab Direct dibit mandate) 
	
- need to check during preparation and signature that all DDM data is correctly filled in and the content of DDM document is uploaded (based on document rule configuration)

## 📊 Appears In (1 diagrams)

- Custom: LOR-7147 BSL: Add field for tracking eADA Enrollment
