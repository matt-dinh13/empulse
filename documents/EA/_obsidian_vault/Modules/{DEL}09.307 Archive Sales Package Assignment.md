---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Access Rights"
domain: "Modules"
element_id: 1775313
diagrams: 4
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {DEL}09.307 Archive Sales Package Assignment

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Access Rights

## 📝 Notes

{DEL PCG-4293/}
Archives existing Sales Package Assignment.

## 🔗 Connections (5)

- ← UseCase «include»: [[{ADD}09.276 Assign sales package to salesroom (UseCase 1274812)]]
- ← UseCase «include»: [[{ADD}09.277 Remove sales package from salesroom (UseCase 1274811)]]
- ← Dependency: [[{DEL}SalesPackageWS]]
- → Realisation: [[{DEL}09.307 Archive Sales Package Assignment (Requirement 1775647)]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: ArchiveSalesPackageAssignment
- Use Case: {DEL}Sales Package Assignment UC
- Use Case: Manage Sales Packages on Salesroom
