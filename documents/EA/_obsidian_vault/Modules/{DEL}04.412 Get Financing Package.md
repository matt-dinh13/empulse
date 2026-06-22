---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Access Rights"
domain: "Modules"
element_id: 1858712
diagrams: 4
connections: 9
tags:
  - usecase
  - modules
---

# 🎯 {DEL}04.412 Get Financing Package

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Access Rights

## 📝 Notes

Returns list of Financing Packages according to specified search criteria.

## 🔗 Connections (9)

- ← Realisation: [[FinancingSchemeWS]]
- ← UseCase «include»: [[{DEL}Clone version of Financing Package UI]]
- ← UseCase «include»: [[{DEL}04.432 Update Financing Package version UI]]
- ← UseCase «include»: [[{DEL}04.433 Search Financing Package UI]]
- ← UseCase «include»: [[{DEL}04.435 Show Financing Package version detail UI]]
- → Dependency: [[GetFinancingPackage - search filter]]
- → Realisation: [[04.412 Get Financing Package]]
- → Dependency: [[GetFinancingPackageRequest - validation rules]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: GetFinancingPackage
- Use Case: Financing Package UC
- Use Case: UI for management of Financing Package
