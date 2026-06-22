---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Service Eligibility Evaluation/Access Rigths"
domain: "Analysis Model"
element_id: 1824629
diagrams: 2
connections: 3
tags:
  - usecase
  - analysis-model
---

# 🎯 {DEL}08.366 Get evaluated eligibility criteria from external system

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Collection tools support/Service Eligibility Evaluation/Access Rigths

## 📝 Notes

The UC is not used longer as OSB function for data getting from DWH is removed in CBL-24608
This technical use case describes getting and processing of evaluated client's service eligibilities The data is prepared on DWH and as soon as it is set into output area (OWNER_OUT.O_CLIENT_COLL_TOOL_ELIGIBLE table), DWH notifies the BSL data is prepared. BSL download the data from output area, validates and stores in the Client Service Eligibility entity.

## 🔗 Connections (2)

- → Dependency: [[{DEL}Check evaluated eligibility data from external system]]
- → Realisation: [[{DEL}08.366 Get evaluated eligibility criteria from external system]]

## 📊 Appears In (2 diagrams)

- Logical: Access Rigths
- Use Case: Getting evaluated eligibility criteria from external system
