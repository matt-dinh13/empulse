---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Access Rights"
domain: "Modules"
element_id: 1860487
diagrams: 4
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 {DEL}04.401 Create Financing Scheme

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Access Rights

## 📝 Notes

Creates new version of Financing Scheme:
- from a set of values (create new Scheme)
- from existing version of the same Scheme (create new version of Scheme)
- from existing version of another Scheme (clone Scheme)

## 🔗 Connections (6)

- ← Realisation: [[FinancingSchemeWS]]
- ← UseCase «include»: [[{DEL}04.421 Create new Financing Scheme UI]]
- ← UseCase «include»: [[{DEL}Clone version of Financing Scheme UI]]
- → Realisation: [[04.401 Create Financing Scheme]]
- → Dependency: [[CreateFinancingScheme - validation rules]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: CreateFinancingScheme
- Use Case: Financing Scheme Management UC
- Use Case: UI for management of Financing Scheme
