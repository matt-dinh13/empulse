---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Automatic jobs"
domain: "Modules"
element_id: 1855293
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Activate Product version - job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Automatic jobs

## 📝 Notes

Automatic job code: PRODUCTS_ACTIVATION
Description: Activation of product versions with planned activation date
Used for: UC 02.262

Number of starts min: 1 per day
Time of start: optimally just after midnight
Max number of starts: not limited
Business impact: HIGH

## 🔗 Connections (2)

- → Dependency: [[Once a day (Activity 1855296)]]
- ← Dependency: [[02.262 Activate product version automatically (UseCase 1872117)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Manage Product
