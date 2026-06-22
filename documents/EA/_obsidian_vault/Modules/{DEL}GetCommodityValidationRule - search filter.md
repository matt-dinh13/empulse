---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Use Case"
domain: "Modules"
element_id: 1858690
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}GetCommodityValidationRule - search filter

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Validation Setting/Provided Services/Use Case

## 📝 Notes

//This algorithm finds Commodity Validation Rule according to defined set of criteria

Input:
- Request.GetCommodityValidationRuleCriterion

Output:
- set of Commodity Validation Rule (CVR)

System transforms set of Request.GetCommodityValidationRuleCriterion (Criterion) to searching rules as follows:
 

	
- Criterion.type = CODE (more such criteria can be defined)
If exists such criterion then system finds CVR where CVR.Code = Criterion.value for at least one criterion where Criterion.type = CODE
	
- Criterion.type = NAME
If exists such criterion then system finds CVR where UpperCase(Criterion.value) is in UpperCase(CVR.name)


	
- Criterion.type = VALID_ON_DATE
If exists such criterion then system finds CVR where CVR.ValidFrom <= Criterion.value AND (CVR.ValidTo >= Criterion.value OR is not defined)


	
- Criterion.type = TYPE (more such criteria can be defined)
If exists such criterion then system finds CVR where CVR.Type = Criterion.value for at least one criterion where Criterion.type = TYPE
	
- Criterion.type = EXTERNAL_TYPE (more such criteria can be defined)
If exists such criterion then system finds CVR where CVR.ExternalType = Criterion.value for at least one criterion where Criterion.type = EXTERNAL_TYPE


System finds and returns CVR which satisfy all the searching rules (archived record are ignored).

## 🔗 Connections (1)

- ← Dependency: [[{DEL}01.602 Get Commodity Validation Rule]]

## 📊 Appears In (1 diagrams)

- Use Case: Commodity Validation Setting UC
