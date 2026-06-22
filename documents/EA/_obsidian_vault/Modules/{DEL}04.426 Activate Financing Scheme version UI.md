---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/UI for Financing Scheme Management/Access Rights"
domain: "Modules"
element_id: 1859286
diagrams: 4
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {DEL}04.426 Activate Financing Scheme version UI

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/UI for Financing Scheme Management/Access Rights

## 📝 Notes

This use case is intended for activation of inactive version of Financing Scheme.
User can activate Financing Scheme version immediately or plan on required date.
After activation the Financing Scheme can be assigned to Financing Package.

## 🔗 Connections (5)

- ← Realisation: [[Activate Financing Scheme_Package]]
- ← Realisation: [[Activate (GUIElement 1831607)]]
- → UseCase «include»: [[{DEL}04.414 Activate Financing Package]]
- → Realisation: [[{DEL}04.426 Activate Financing Scheme version UI (Requirement 1860528)]]
- ← Association: [[User (Actor 1872158)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: Activate Financing Scheme/Package
- Custom: Show Financing Scheme
- Use Case: UI for management of Financing Scheme
