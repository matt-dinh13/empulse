---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Access Rights"
domain: "Analysis Model"
element_id: 1863199
diagrams: 2
connections: 8
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}05.160 Generate DD statement file

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Access Rights

## 📝 Notes

System calls this use case asynchronously to export direct debit statements into XML files. All DD statements which have not been exported yet are exported into XML files. DD statements are grouped by corresponding DD channel and due date and put in one file per group. Generated files are placed in directory on external storage.

## 🔗 Connections (8)

- → Realisation: [[REQ 7_ Modification of DDS source file creation]]
- → Realisation: [[05.160 Generate DD statement file]]
- → Realisation: [[REQ 1_ Exporting DDS files]]
- → Realisation: [[REQ2 Take account a direct asscociaton to DD Provider from DDM during a generating DDS]]
- ← Dependency «invokes»: [[05.130 Generate DD statements (UseCase 1863204)]]
- → Dependency: [[Rule for generating DDS file]]
- ← Dependency «invokes»: [[{ADD}05.161 Export DDS files]]
- ← UseCase: [[Time (Actor 1880869)]]

## 📊 Appears In (2 diagrams)

- Custom: Access Rights
- Use Case: Direct Debit statements
