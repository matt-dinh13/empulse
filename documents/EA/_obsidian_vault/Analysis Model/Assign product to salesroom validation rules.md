---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/Use Case"
domain: "Analysis Model"
element_id: 1309189
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Assign product to salesroom validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/Use Case

## 📝 Notes

Abbreviations:
IAV = Interval of validity of product assignment to salesroom 
StartIAV = entered Start of IAV
EndIAV = entered End of IAV


	
- If both values are filled in then EndIAV >= StartIAV (MSG_0309[ValidTo][ValidFrom]).
	
- If EndIAV is filled in then EndIAV >= TODAY. 


Only for manual assignment: 

	
- StartIAV is mandatory


	
- StartIAV >= TODAY (MSG_0639 [ValidFrom][TODAY]).


Only for bulk assignment: 

	
- Product.ValidFrom =< StartIAV
	
- Product.ValidTo >= EndIAV

## 🔗 Connections (2)

- ← Dependency: [[09.270 Assign product to salesroom (UseCase 1746868)]]
- ← Dependency: [[09.272 Process product to salesroom assignment file (UseCase 1746864)]]

## 📊 Appears In (1 diagrams)

- Use Case: Manage Products on Salesroom
