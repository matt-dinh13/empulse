---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Document management (DMS)/Custom data types definition and validator library/Validation rules/KZ"
domain: "Modules"
element_id: 1638007
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Date of issue

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Custom data types definition and validator library/Validation rules/KZ

## 📝 Notes

- Mandatory
	
- Cannot be in future


	
- Following validation must be successful
1) Date of birth+16 years <= Date of issue
2a) Date of issue <= 08.09.2009 then validation is successful 
2b) Date of issue > 08.09.2009 then
       - current date must be < Date of issue +10 years
       - otherwise validation is unsuccessful


If validation is unsuccessful, MSG_InvalidIDCardIssueDate is displayed

Valid example:
Date of birth = 1.1.1993
Issue date = 1.10.2009

## 🔗 Connections (1)

- ← Dependency: [[ID Card (Action 1638025)]]

## 📊 Appears In (1 diagrams)

- Custom: Document validation - KZ
