---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case"
domain: "Modules"
element_id: 1775639
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 {DEL}GetSalesPackageAssignment - search filter

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Use Case

## 📝 Notes

{DEL PCG-4293/}
//This algorithm finds Sales Packages Assignments according to defined set of criteria

Input:
- Request.GetSalesPackageAssignmentCriterion

Output:
- set of assignments Salesroom To Sales Package (SPA)

System transforms set of Request.GetSalesPackageAssignmentCriterion (Criterion) to searching rules as follows:
 

	
- Criterion.type = SALESROOM (more such criteria can be defined)
If exists such criterion then system finds SPA where SPA.Salesroom = Criterion.value for at least one criterion where Criterion.type = SALESROOM


	
- Criterion.type = SALESPACKAGE (more such criteria can be defined)
If exists such criterion then system finds SPA where SPA.SalesPackage = Criterion.value for at least one criterion where Criterion.type = SALESPACKAGE


	
- Criterion.type = VALID_ON_DATE
If exists such criterion then system finds SPA where SPA.ValidFrom <= Criterion.value AND (SPA.ValidTo >= Criterion.value OR is not defined)


System finds and returns SPA which satisfy all the searching rules (archived record are ignored).

## 🔗 Connections (1)

- ← Dependency: [[{DEL}09.305 Get Sales Package Assignment]]

## 📊 Appears In (1 diagrams)

- Use Case: {DEL}Sales Package Assignment UC
