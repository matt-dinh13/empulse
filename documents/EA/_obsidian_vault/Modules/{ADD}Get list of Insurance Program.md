---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/INSR API/Business Rules"
domain: "Modules"
element_id: 1690195
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get list of Insurance Program

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Consumed/INSR API/Business Rules

## 📝 Notes

{ADD PCG-3531/}
List of available Insurance Programs (Code) is retrieved from external module (Insurance) by REST service call with GET request: Insurance (INSR)/insurance-programs

If only active commodity types are needed then fill versionStatus = ACTIVE

## 🔗 Connections (2)

- → Dependency: [[Insurance (INSR)]]
- ← Dependency: [[INSURANCE service parameter validation]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: Validation Rules
