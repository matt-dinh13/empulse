---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822786
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Find Application form scope

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

Business rule describes system behavior of Application form scope when system receives Form scope from external system

1. KZ customization

1SP and 2SP 1BoD variants:

	
- If Scoring.Evaluation_Request_Type = 'BASIC' and Scoring.Evaluation_Request_Status = 'FINISHED' and  Scoring Result.AF Template = 'SHORT', then system displays Application form scope = SHORT


	
- If Scoring.Evaluation_Request_Type = 'BASIC' and Scoring.Evaluation_Request_Status = 'FINISHED' and  Scoring Result.AF Template = 'MID', then system displays Application form scope = MID


	
- If Scoring.Evaluation_Request_Type = 'BASIC' and Scoring.Evaluation_Request_Status = 'FINISHED' and  Scoring Result.AF Template is empty, then system displays Application form scope = MID


2SP 2BoD variants:

	
- If Scoring.Evaluation_Request_Type = PRELIM and Scoring.Evaluation_Request_Status = FINISHED and  Scoring Result.AF Template = MID then system displays Application form scope = MID
	
- If Scoring.Evaluation_Request_Type = PRELIM and Scoring.Evaluation_Request_Status = FINISHED and  Scoring Result.AF Template = SHORT then system displays Application form scope = SHORT


	
- If Scoring.Evaluation_Request_Type = PRELIM and Scoring.Evaluation_Request_Status = FINISHED and  Scoring Result.AF Template = FULL then system displays Application form scope = FULL



	
- If Scoring.Evaluation_Request_Type = PRELIM and Scoring.Evaluation_Request_Status = FINISHED and  Scoring Result.AF Template is empty and for same Scoring.Contract_Id exists record with  Scoring.Evaluation_Request_Type = BASIC and Scoring.Evaluation_Request_Status = FINISHED then system displays Application form scope = MID


	
- If Scoring.Evaluation_Request_Type = PRELIM and Scoring.Evaluation_Request_Status = FINISHED and  Scoring Result.AF Template is empty and for same Scoring.Contract_Id doesn&#180;t exist record with  Scoring.Evaluation_Request_Type = BASIC then system displays Application form scope = FULL


2. Other countries:
- scope of data is optional (default value is FULL).

## 🔗 Connections (1)

- ← Dependency: [[Find application form configuration]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
