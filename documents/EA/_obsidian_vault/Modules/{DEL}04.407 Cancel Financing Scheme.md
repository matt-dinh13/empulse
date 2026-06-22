---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Access Rights"
domain: "Modules"
element_id: 1860485
diagrams: 4
connections: 5
tags:
  - usecase
  - modules
---

# 🎯 {DEL}04.407 Cancel Financing Scheme

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Access Rights

## 📝 Notes

Cancels version of Financing Scheme in status Inactive (N) or For Activation (F).

## 🔗 Connections (5)

- ← Realisation: [[FinancingSchemeWS]]
- ← UseCase «include»: [[{DEL}04.428 Cancel Financing Scheme version UI]]
- → Dependency: [[CancelFinancingScheme - validation rules]]
- → Realisation: [[04.407 Cancel Financing Scheme]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: CancelFinancingScheme
- Use Case: Financing Scheme Management UC
- Use Case: UI for management of Financing Scheme
