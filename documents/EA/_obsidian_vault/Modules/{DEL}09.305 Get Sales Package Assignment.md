---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Access Rights"
domain: "Modules"
element_id: 1775315
diagrams: 4
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 {DEL}09.305 Get Sales Package Assignment

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Access Rights

## 📝 Notes

{DEL PCG-4293/}
Returns list of assignment of Sales Packages to Salesrooms according to specified search criteria.

## 🔗 Connections (6)

- ← UseCase «include»: [[{ADD}09.276 Assign sales package to salesroom (UseCase 1274812)]]
- ← Realisation: [[{DEL}SalesPackageWS]]
- → Dependency: [[{DEL}GetSalesPackageAssignmentRequest - validation rules]]
- → Dependency: [[{DEL}GetSalesPackageAssignment - search filter]]
- → Realisation: [[{DEL}09.305 Get Sales Package Assignment (Requirement 1775646)]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: GetSalesPackageAssignment
- Use Case: {DEL}Sales Package Assignment UC
- Use Case: Manage Sales Packages on Salesroom
