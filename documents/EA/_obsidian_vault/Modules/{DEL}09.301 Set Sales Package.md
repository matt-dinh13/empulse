---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Access Rights"
domain: "Modules"
element_id: 1775319
diagrams: 4
connections: 7
tags:
  - usecase
  - modules
---

# 🎯 {DEL}09.301 Set Sales Package

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Access Rights

## 📝 Notes

{DEL PCG-4293/}
Creates new or updates existing Sales Package.

## 🔗 Connections (7)

- ← Realisation: [[{DEL}SalesPackageWS]]
- → Dependency: [[{DEL}SetSalesPackage - validation rules]]
- → Realisation: [[09.301 Set Sales Package]]
- ← UseCase «include»: [[{DEL}09.312 Update Sales Package UI]]
- ← UseCase «include»: [[{DEL}09.311 Create new Sales Package UI]]
- ← UseCase «include»: [[{DEL}09.314 Clone Sales Package UI]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: SetSalesPackage
- Use Case: {DEL}Sales Package UC
- Use Case: UI for management of Sales Package
