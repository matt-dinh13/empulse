---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Access Rights"
domain: "Modules"
element_id: 1858710
diagrams: 4
connections: 6
tags:
  - usecase
  - modules
---

# 🎯 {DEL}04.411 Create Financing Package

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Access Rights

## 📝 Notes

Creates new version of Financing Package:
- from a set of values (create new Package)
- from existing version of the same Package (create new version of Package)
- from existing version of another Package (clone Package)

## 🔗 Connections (6)

- ← Realisation: [[FinancingSchemeWS]]
- ← UseCase «include»: [[{DEL}Clone version of Financing Package UI]]
- ← UseCase «include»: [[{DEL}04.431 Create new Financing Package UI]]
- → Dependency: [[CreateFinancingPackage - validation rules]]
- → Realisation: [[04.411 Create Financing Package]]
- ← Association: [[External Component]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Logical: CreateFinancingPackage
- Use Case: Financing Package UC
- Use Case: UI for management of Financing Package
