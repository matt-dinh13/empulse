---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Access Rights"
domain: "Modules"
element_id: 1858715
diagrams: 4
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {DEL}04.413 Update Financing Package

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Access Rights

## 📝 Notes

Updates existing version of Financing Package in status Inactive (N) or For Activation (F).

## 🔗 Connections (5)

- ← Realisation: [[FinancingSchemeWS]]
- ← UseCase «include»: [[{DEL}04.432 Update Financing Package version UI]]
- → Realisation: [[04.413 Update Financing Package]]
- → Dependency: [[UpdateFinancingPackage - validation rules]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: UpdateFinancingPackage
- Use Case: Financing Package UC
- Use Case: UI for management of Financing Package
