---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract financial partnership/Access rights"
domain: "Analysis Model"
element_id: 1713673
diagrams: 1
connections: 4
tags:
  - usecase
  - analysis-model
---

# 🎯 {DEL}01.872 Load financial partnership requests

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract financial partnership/Access rights

## 📝 Notes

{DEL CLM-5045/}
This use case loads financial partnership requests for processing, performs basic validations and invokes processing. 

Use case is scheduled to run by Load financial partnership requests job

Used for bulk update of Joint Financing scheme (JSF) evidence.

## 🔗 Connections (4)

- → Dependency: [[Load financial partnership requests job]]
- → Realisation: [[{DEL}01.872 Load financial partnership requests]]
- → Realisation: [[01.522 Get prepared data from external system]]
- → Dependency «invokes»: [[{DEL}01.871 Process financial partnership file (UseCase 1713672)]]

## 📊 Appears In (1 diagrams)

- Custom: Access rights
