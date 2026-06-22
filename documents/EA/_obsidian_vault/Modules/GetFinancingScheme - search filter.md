---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Use Case"
domain: "Modules"
element_id: 1231559
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 GetFinancingScheme - search filter

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Use Case

## 📝 Notes

//This algorithm finds Financing Schemes according to defined set of criteria

Input:
- Request.GetFinancingSchemeCriterion

Output:
- set of Financing Scheme (FS)

System transforms set of Request.GetFinancingSchemeCriterion (Criterion) to searching rules as follows:

	
- Criterion.type = VALID_ON_DATE
If exists such criterion then system finds FS where FS.ValidFrom <= Criterion.value AND (FS.ValidTo >= Criterion.value OR is not defined)


	
- Use searching Criterion as input for rule GetVersionedEntity - search filter.


System finds and returns FS which satisfy all the searching rules.

## 🔗 Connections (2)

- → Dependency: [[GetVersionedEntity - search filter]]
- ← Dependency: [[{DEL}04.402 Get Financing Scheme]]

## 📊 Appears In (1 diagrams)

- Use Case: Financing Scheme Management UC
