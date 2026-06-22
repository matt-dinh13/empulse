---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/UseCase Model"
domain: "Analysis Model"
element_id: 1351508
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Decide who will fill in the second block of data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/UseCase Model

## 📝 Notes

- This algorithm defines how the second block of data of the application form (in case of two-stage sales process) will be filled in.


Inputs:
Salesroom.2BoD_filling_type:

Algorithm:

	
- If Salesroom.2BoD_filling_type = 'BO' back-office will be responsible for filling
	
- If Salesroom.2BoD_filling_type = 'FO' the sales agent will be responsible for filling
	
- If Salesroom.2BoD_filling_type = 'choice' the user will have choice to decide who will be responsible for filling

## 🔗 Connections (2)

- ← Dependency: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]
- ← Dependency: [[01.450 Receive evaluation result (UseCase 1819978)]]

## 📊 Appears In (2 diagrams)

- Use Case: Contract origination
- Use Case: Receive evaluation results
