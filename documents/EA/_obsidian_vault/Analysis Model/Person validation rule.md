---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773424
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Person validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

- Name1
	
- Name2
	
- Name3
	
- Name4
	
- Name5
	
- Name6
	
- fullName
	
- birthdate
	
- genderType
	
- relationType-must be value of Person Relation Type.Code
	
- contact – each record is validated according to Contact validation rule, contactTypeRole must be PE (MSG_Ext_ContactTypeRole)
	
- remitter
	
- birthplace
	
- identificationNumber


	
- address - each record must be validated according to PersonAddress validation rule
	
- remittance - each record is validated according to Remittance Data validation rule
	
- personID - must exist in appropriate Additional person.External ID

## 🔗 Connections (4)

- ← Dependency: [[Application validation rule (Requirement 1773433)]]
- → Dependency: [[PersonAddress validation rule]]
- → Dependency: [[Remittance Data validation rule (Requirement 1773411)]]
- → Dependency: [[Contact validation rule]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
