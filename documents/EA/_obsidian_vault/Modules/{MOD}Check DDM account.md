---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/CEL Account (CELA)/Requirements/CBL-19085 (CLM-5321) DDM validation - test & document/CLM-5321 - DDM validation - test & document"
domain: "Modules"
element_id: 1798546
diagrams: 3
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Check DDM account

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/CEL Account (CELA)/Requirements/CBL-19085 (CLM-5321) DDM validation - test & document/CLM-5321 - DDM validation - test & document

## 📝 Notes

{CLM-5321/}


This use case flags a contract with extended prop of type DDM to either value:
 

	
- BLACKLISTED
	
- REUSED
	
- VERIFIED


depending on checks done in Trustlists (TRL) module's bank account lists and BSL's account information binded onto unique CUID(s), respectively.

## 🔗 Connections (6)

- → Dependency «call»: [[TRL]]
- → Dependency «call»: [[BSL (Actor 1798542)]]
- → Dependency «call»: [[COMA (Actor 1798540)]]
- → Dependency «use»: [[{ADD}Flag contract with extended property of type DDM]]
- → UseCase «invoke»: [[{ADD}Process DDM change]]
- → UseCase «invoke»: [[{ADD}Process contract change]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-19085 (CLM-5321) DDM validation - test & document
- Use Case: DDM validation
- Use Case: Use cases
