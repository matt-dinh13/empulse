---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Direct Debit Statements"
domain: "Analysis Model"
element_id: 1863197
diagrams: 2
connections: 2
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}05.161 Export DDS files

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Direct Debit Statements

## 📝 Notes

{ADD CBL-16507 IS-1640/}
Use case for manual export of DDS files from BSL GUI or via API from external system.

API:
/v1.0/dds/triggerDDSFileExport
for example:
https://bsl.ph00a1.cz.infra/bsl/openapi/swagger-ui.html#/Direct_Debit_Statements

GUI:
Home page -> section Payments -> Export DDS files

## 🔗 Connections (2)

- → Dependency «invokes»: [[{MOD}05.160 Generate DD statement file]]
- ← Dependency «invokes»: [[directDebitStatements]]

## 📊 Appears In (2 diagrams)

- Logical: Direct Debit Statements
- Use Case: Direct Debit statements
