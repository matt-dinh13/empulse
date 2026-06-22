---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Automatic jobs"
domain: "Modules"
element_id: 1855295
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Activate Service version - job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Automatic jobs

## 📝 Notes

Automatic job code: SERVICES_ACTIVATION
Description: Activation of service versions with planned activation date
Used for: UC 08.190

Number of starts min: 1 per day
Time of start: optimally just after midnight{/ADD}
Max number of starts: not limited
Business impact: HIGH

## 🔗 Connections (2)

- → Dependency: [[Once a day (Activity 1855296)]]
- ← Dependency: [[08.190 Activate Service version automatically]]

## 📊 Appears In (2 diagrams)

- Custom: Automatic jobs
- Use Case: Manage Services
