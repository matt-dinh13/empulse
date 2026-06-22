---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Access Rights"
domain: "Modules"
element_id: 1860492
diagrams: 4
connections: 9
tags:
  - usecase
  - modules
---

# 🎯 {DEL}04.402 Get Financing Scheme

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Access Rights

## 📝 Notes

Returns list of Financing Schemas according to specified search criteria.

## 🔗 Connections (9)

- ← Realisation: [[FinancingSchemeWS]]
- ← UseCase «include»: [[{DEL}04.423 Search Financing Scheme UI]]
- ← UseCase «include»: [[{DEL}04.425 Show Financing Scheme version detail UI]]
- ← UseCase «include»: [[{DEL}Clone version of Financing Scheme UI]]
- ← UseCase «include»: [[{DEL}04.422 Update Financing Scheme version UI]]
- → Dependency: [[GetFinancingScheme - search filter]]
- → Dependency: [[GetFinancingSchemeRequest - validation rules]]
- → Realisation: [[04.402 Get Financing Scheme]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: GetFinancingScheme
- Use Case: Financing Scheme Management UC
- Use Case: UI for management of Financing Scheme
