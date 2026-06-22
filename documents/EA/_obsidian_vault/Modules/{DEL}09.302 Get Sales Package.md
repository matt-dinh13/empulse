---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Access Rights"
domain: "Modules"
element_id: 1775317
diagrams: 4
connections: 9
tags:
  - usecase
  - modules
---

# 🎯 {DEL}09.302 Get Sales Package

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Access Rights

## 📝 Notes

{DEL PCG-4293/}
Returns list of Sales Packages according to specified search criteria including Sales Package properties.

## 🔗 Connections (9)

- ← Realisation: [[{DEL}SalesPackageWS]]
- → Dependency: [[{DEL}GetSalesPackage - search filter]]
- → Dependency: [[{DEL}GetSalesPackageRequest - validation rules]]
- → Realisation: [[09.302 Get Sales Package]]
- ← UseCase «include»: [[{DEL}09.315 Show Sales Package detail UI]]
- ← UseCase «include»: [[{DEL}09.312 Update Sales Package UI]]
- ← UseCase «include»: [[{DEL}09.313 Search Sales Package UI]]
- ← UseCase «include»: [[{DEL}09.314 Clone Sales Package UI]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: GetSalesPackage
- Use Case: {DEL}Sales Package UC
- Use Case: UI for management of Sales Package
