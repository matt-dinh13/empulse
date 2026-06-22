---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Common/Business Rules"
domain: "Modules"
element_id: 1800807
diagrams: 4
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Create business event

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Analytical Model/Contract Operations/Common/Business Rules

## 📝 Notes

{ADD CLM-4405/}
Input:

	
- Contract


	
- BusinessEventType
	
- ModificationBy
	
- TimeOfModification
	
- salesroom - optional
	
- list of attributes, i.e. pair
- BusinessEventAttributeType
- Value      ...string


Algorithm:
1. System creates a BusinessEvent with the following parameters:

	
- Contract = passed Contract
	
- Type = passed BusinessEventType


	
- TimeOfModification = TimeOfModification
	
- Originator = ModificationBy
	
- Salesroom = passes Salesroom


	
- IsInternaluser =
- '0' when the related user has neither role "SA" or "RA", or the role of the user cannot be detected.
- '1' when the related user has application role "SA"
- '2' when the related user has application role "RA"
- '3' when the related user has both application roles,  "SA" and "RA"


2. System creates a BusinessEventAttribute for each passed attribute:

	
- Event = created BusinessEvent


	
- Type = passed BusinessEventAttributeType
	
- Value = passed Value


Note: following behaviour for setting of IsInternalUser
for ARRANGE_APPLICATION the value is set always 0
for BSL (UI) the value is set based on logged user (ORIGINATOR)
for API the value is set based on technical user (not originator)

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Contract write-off]]
- ← Dependency: [[{MOD}Contract pay-off (UseCase 1851484)]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: CLM-4405 - REL Write-off - COMA - AccountClosure processing
- Use Case: Contract pay-off
- Use Case: Contract write-off
