---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1775640
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}GetSalesPackage - search filter

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case

## 📝 Notes

{DEL PCG-4293/}
//This algorithm finds Sales Packages according to defined set of criteria

Input:
- Request.GetSalesPackageCriterion

Output:
- set of Sales Package (SP)

System transforms set of Request.GetSalesPackageCriterion (Criterion) to searching rules as follows:
 

	
- Criterion.type = CODE (more such criteria can be defined)
If exists such criterion then system finds SP where SP.Code = Criterion.value for at least one criterion where Criterion.type = CODE
	
- Criterion.type = NAME
If exists such criterion then system finds SP where UpperCase(Criterion.value) is in UpperCase(SP.name)


	
- Criterion.type = ACTIVE
If exists such criterion then system finds SP where SP.Active = Criterion.value


System finds and returns SP which satisfy all the searching rules (archived record are ignored).

## 🔗 Connections (1)

- ← Dependency: [[{DEL}09.302 Get Sales Package]]

## 📊 Appears In (1 diagrams)

- Use Case: {DEL}Sales Package UC
