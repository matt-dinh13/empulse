---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Access Rights"
domain: "Modules"
element_id: 1858711
diagrams: 4
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {DEL}04.417 Cancel Financing Package

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Access Rights

## 📝 Notes

Cancels version of Financing Scheme in status Inactive (N) or For Activation (F).

## 🔗 Connections (5)

- ← Realisation: [[FinancingSchemeWS]]
- ← UseCase «include»: [[{DEL}04.438 Cancel Financing Package version]]
- → Dependency: [[CancelFinancingPackage - validation rules]]
- → Realisation: [[04.417 Cancel Financing Package]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: CancelFinancingPackage
- Use Case: Financing Package UC
- Use Case: UI for management of Financing Package
