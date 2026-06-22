---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/Use Case"
domain: "Modules"
element_id: 1858700
diagrams: 1
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {DEL}Clone version of Financing Package UI

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/UI for Financing Package Management/Use Case

## 📝 Notes

Use case is intended for creating of a new inactive version of a Financing Package based on another existing version.
This is not a business UC (has no access right defined), this UC describes shared functionality, which is included into superior business UCs.

## 🔗 Connections (5)

- → UseCase «include»: [[{DEL}04.411 Create Financing Package]]
- → UseCase «include»: [[{DEL}04.412 Get Financing Package]]
- ← UseCase «include»: [[{DEL}04.437 Create new version of Financing Package UI]]
- ← UseCase «include»: [[{DEL}04.434 Clone Financing Package UI]]
- ← Association: [[User (Actor 1872158)]]

## 📊 Appears In (1 diagrams)

- Use Case: UI for management of Financing Package
