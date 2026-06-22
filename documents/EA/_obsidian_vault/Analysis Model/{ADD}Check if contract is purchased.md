---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules"
domain: "Analysis Model"
element_id: 1878531
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Check if contract is purchased

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules

## 📝 Notes

{ADD CBL-30268 CLM-7562}{country PH}

Input:
- contract code

Output:
- TRUE/FALSE

Steps:

	
- System finds contract extended properties for the contract (Contract -> ExtendedPropertyValue -> ExtendedPropertyItem where ExtendedPropertyItem.ExtPropertyGroupCode = CONTRACT). If no contract extended property is found, set result = FALSE.
	
- System check if exists record with ExtPropertyItemCode = ORIGINAL_CONTRACT_CODE and not null Value. If no record is found, set result = FALSE
	
- Return TRUE.

## 🔗 Connections (2)

- ← Dependency: [[06.021 Update client data from contract]]
- ← Dependency: [[{MOD}Sign contract finalization]]

## 📊 Appears In (2 diagrams)

- Custom: Common Business Rules for Contract Management
- Use Case: Contract signing
