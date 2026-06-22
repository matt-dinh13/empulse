---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Access Rights"
domain: "Modules"
element_id: 1858706
diagrams: 5
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 {DEL}04.414 Activate Financing Package

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Access Rights

## 📝 Notes

Activates version of Financing Package in status Inactive (N) or For Activation (F).

## 🔗 Connections (6)

- ← Realisation: [[FinancingSchemeWS]]
- ← UseCase «include»: [[{DEL}04.436 Activate Financing Package version UI]]
- → Dependency: [[ActivateFinancingPackage - validation rules]]
- → Realisation: [[04.414 Activate Financing Package]]
- ← UseCase «include»: [[{DEL}04.426 Activate Financing Scheme version UI]]
- ← Association: [[External Component]]

## 📊 Appears In (5 diagrams)

- Custom: Access Rights
- Logical: ActivateFinancingPackage
- Use Case: Financing Package UC
- Use Case: UI for management of Financing Package
- Use Case: UI for management of Financing Scheme
