---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Access Rights"
domain: "Modules"
element_id: 1775314
diagrams: 4
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {DEL}09.304 Set Sales Package Assignment

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Access Rights

## 📝 Notes

{DEL PCG-4293/}
Creates new or updates existing assignments of Sales Packages to Salesrooms.

## 🔗 Connections (5)

- ← UseCase «include»: [[{ADD}09.276 Assign sales package to salesroom (UseCase 1274812)]]
- ← Realisation: [[{DEL}SalesPackageWS]]
- → Realisation: [[{DEL}09.304 Set Sales Package Assignment (Requirement 1775651)]]
- → Dependency: [[{DEL}SetSalesPackageAssignment - validation rules]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: SetSalesPackageAssignment
- Use Case: {DEL}Sales Package Assignment UC
- Use Case: Manage Sales Packages on Salesroom
