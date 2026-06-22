---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Partner Scheme/Validation Rules"
domain: "Modules"
element_id: 1826542
diagrams: 2
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {MOD}Partner scheme - validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Provided/Commodity API/Partner Scheme/Validation Rules

## 📝 Notes

PartnerSchemeInputDto  

	
- schemeCode
max length 50
	
- schemeCode, entityType, entityCode
combination (schemeCode, entityType, entityCode) must be unique in Partner scheme
	
- entityType, entityCode
combination (entityType, entityCode) must be unique in Partner scheme


	
- entityType
must exists in Partner scheme entity type
	
- {ADD PCG-4821}name
length 1-100
mandatory for POST (optional for PUT){/ADD}


partnerSchemeSearchParameters 

	
- entityType, entityCode
entityType and entityCode needs to be filled together

## 🔗 Connections (4)

- ← Dependency: [[{MOD}GET partner-scheme by search]]
- ← Dependency: [[GET partner-scheme by code]]
- ← Dependency: [[PUT partner-scheme]]
- ← Dependency: [[POST partner-scheme]]

## 📊 Appears In (2 diagrams)

- Custom: Validation Rules
- Use Case: Use Case
