---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Automatic jobs"
domain: "Modules"
element_id: 1859187
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Activate Financing Scheme version - job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Automatic jobs

## 📝 Notes

Automatic job code: FINANCING_SCHEMES_ACTIVATION
Description: Activation of Financing Scheme versions with planned activation date
Used for: UC 04.406

Number of starts min: 1 per day
Time of start: optimally just after midnight
Max number of starts: not limited
Business impact: HIGH

## 🔗 Connections (2)

- → Dependency: [[Once a day (Activity 1855296)]]
- ← Dependency: [[04.406 Activate Financing Scheme version automatically (UseCase 1859186)]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Financing Scheme - job processing
