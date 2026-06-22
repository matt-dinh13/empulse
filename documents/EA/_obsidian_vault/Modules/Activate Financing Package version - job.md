---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Automatic jobs"
domain: "Modules"
element_id: 1859183
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Activate Financing Package version - job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Automatic jobs

## 📝 Notes

Automatic job code: FINANCING_PACKAGES_ACTIVATION
Description: Activation of Financing Package versions with planned activation date
Used for: UC 04.416

Number of starts min: 1 per day
Time of start: optimally just after midnight
Max number of starts: not limited
Business impact: HIGH

## 🔗 Connections (2)

- ← Dependency: [[04.416 Activate Financing Package version automatically (UseCase 1859182)]]
- → Dependency: [[Once a day (Activity 1855296)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Financing Package - job processing
