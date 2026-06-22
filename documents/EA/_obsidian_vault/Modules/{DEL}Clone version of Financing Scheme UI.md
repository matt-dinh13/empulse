---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/UI for Financing Scheme Management/Use Case"
domain: "Modules"
element_id: 1859285
diagrams: 1
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {DEL}Clone version of Financing Scheme UI

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/UI for Financing Scheme Management/Use Case

## 📝 Notes

Use case is intended for creating of a new inactive version of a Financing Scheme based on another existing version.
This is not a business UC (has no access right defined), this UC describes shared functionality, which is included into superior business UCs.

## 🔗 Connections (5)

- → UseCase «include»: [[{DEL}04.402 Get Financing Scheme]]
- → UseCase «include»: [[{DEL}04.401 Create Financing Scheme]]
- ← UseCase «include»: [[{DEL}04.427 Create new version of Financing Scheme UI]]
- ← UseCase «include»: [[{DEL}04.424 Clone Financing Scheme UI]]
- ← Association: [[User (Actor 1872158)]]

## 📊 Appears In (1 diagrams)

- Use Case: UI for management of Financing Scheme
