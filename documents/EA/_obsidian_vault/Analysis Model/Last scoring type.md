---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Business Rules"
domain: "Analysis Model"
element_id: 1755903
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Last scoring type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Business Rules

## 📝 Notes

When the contract code is on input then the last scoring type is defined as follows:

	
- If CONTRACT.SCORING.EVALUATION_REQUEST_TYPE = OFFER  exists then get values for OFFER.
	
- Otherwise CONTRACT.SCORING.EVALUATION_REQUEST_TYPE = MAIN  exists then get values for MAIN.


	
- Otherwise CONTRACT.SCORING.EVALUATION_REQUEST_TYPE = PRELIM exists then get values for PRELIM.
	
- Otherwise CONTRACT.SCORING.EVALUATION_REQUEST_TYPE = CLIENT exists then get values for CLIENT.


When the temporary application code is on input then 
TEMPORARY APPLICATION.SCORING.EVALUATION_REQUEST_TYPE = BASIC  exists then get values for BASIC

## 🔗 Connections (3)

- ← Dependency: [[Application canceled by underwriting decision]]
- ← Dependency: [[Allowed repeated recalculation]]
- ← Dependency: [[01.040 Get application data (UseCase 1879289)]]

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
