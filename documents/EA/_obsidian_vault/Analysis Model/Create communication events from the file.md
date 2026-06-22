---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Use Case"
domain: "Analysis Model"
element_id: 1239031
diagrams: 3
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Create communication events from the file

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/Use Case

## 📝 Notes

Import of Individual Communication Events

	
- Create new communication event from given info using client found by CUID and communication channel
	
- Set Communication Event.System
	
- For each communication record perform Conversion of Communication Record Type


Conversion of Communication Record Type

	
- If there are email or phone entries present perform Conversion of Contact and persist it, result entity is set to communication record
	
- If there is address present perform Conversion of Address and persist it, result entity is set to communication record
	
- Set following fields of communication record:
- contract – found by contract code
- communication status
- communication subtype
- communication subtype specification
- communication subtype subspecification
- communication type
- note
- communication event (parent entity)
- communication channel
- original created by
- original created date
	
- For each Communication Result Part perform Conversion of Communication Result Part


Conversion of Contact

	
- Create new entity Contact
	
- If Contact Type is COMM_PHONE (i.e. communication record type has phone)
- set contact type code to COMM_PHONE
- set role type to ContactTypeRoleType.CO
- set phoneNumber value to phone number from communication record type
- set extension value to extension from communication record type
	
- If Contact type is COMM_EMAIL (i.e. communication record type has email and has no phone)
- set contact type code to COMM_EMAIL
- set role type to ContactTypeRoleType.CO
- set email value to email from communication record type


Conversion of Address

	
- set country code
	
- set region code
	
- set district code
	
- set sub-district code
	
- set town ( for Indonesia it has to be town code, for India town name)
	
- set zip code
	
- perform some country specific modification of address (we can here try to adjust town for Indonesia)
	
- set block
	
- set block set
	
- set flat
	
- set floor
	
- set house number
	
- set landmark
	
- set locality
	
- set street name


Conversion of Communication Result Part

	
- Create new communication result part entity:
Set value, result type, result type part code, communication record
	
- persist result entity

## 🔗 Connections (3)

- ← Dependency: [[{MOD}07.060 Process communication list file]]
- ← Dependency: [[{MOD}07.065 Create communication on external request]]
- ← Dependency: [[07.041 Create communication record (UseCase 1879984)]]

## 📊 Appears In (3 diagrams)

- Use Case: Communication records
- Use Case: Create communication on external request
- Use Case: Import list of communication
