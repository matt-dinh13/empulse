---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Bank Account/Validation rules"
domain: "Analysis Model"
element_id: 924260
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 SN Bank Account validation rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Bank Account/Validation rules

## 📝 Notes

Bank account structures are country specific, following limits are valid for all variants.

	
- Bank Branch Synchronization Code	
identification by synchronization code, max. 30 chars; 
	
- Bank Synchronization Code	
identification by synchronization code, max. 30 chars; mandatory
	
- For payments
boolean; default = FALSE; mandatory
	
- Name
max. 255 chars
	
- Number
mandatory; max. 35 chars


	
- Usage
Mandatory; enumeration of [SA, CA, CC]; max.2 chars

## 🔗 Connections (2)

- ← Dependency: [[SNM synchronization - validation rules]]
- ← Dependency: [[Create_Update bank account]]

## 📊 Appears In (2 diagrams)

- Custom: SN Bank Account validation rules
- Custom: Synchronization validation rules
