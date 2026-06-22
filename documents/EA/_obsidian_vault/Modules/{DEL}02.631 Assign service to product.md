---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/Access Rights"
domain: "Modules"
element_id: 1860406
diagrams: 4
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {DEL}02.631 Assign service to product

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/Access Rights

## 📝 Notes

Use case is intended for assignment of service (including insurance) of selected type to product.
Both service type and service assignments are managed in one form.

## 🔗 Connections (6)

- ← Realisation: [[Services (Class 1803024)]]
- ← Realisation: [[Assign Service]]
- ← Realisation: [[Assign services for product]]
- → Dependency: [[{MOD}Check compatibility of service type to product properties]]
- → Realisation: [[{DEL}02.631 Assign service to product (Requirement 1860512)]]
- ← Association: [[User (Actor 1872158)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: Service or Insurance-Assign
- Custom: Tab Services
- Use Case: Assign Service
