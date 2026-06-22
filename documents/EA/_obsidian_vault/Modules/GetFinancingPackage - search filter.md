---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1207512
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 GetFinancingPackage - search filter

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Use Case

## 📝 Notes

//This algorithm finds Financing Package according to defined set of criteria

Input:
- Request.GetFinancingPackageCriterion

Output:
- set of Financing Package (FP)

System transforms set of Request.GetFinancingPackageCriterion (Criterion) to searching rules as follows:

	
- Criterion.type = VALID_ON_DATE
If exists such criterion then system finds FP where FP.ValidFrom <= Criterion.value AND (FP.ValidTo >= Criterion.value OR is not defined)


	
- Get searching rules according to GetVersionedEntity - search filter.


System finds and returns FP which satisfy all the searching rules.

## 🔗 Connections (2)

- → Dependency: [[GetVersionedEntity - search filter]]
- ← Dependency: [[{DEL}04.412 Get Financing Package]]

## 📊 Appears In (1 diagrams)

- Use Case: Financing Package UC
