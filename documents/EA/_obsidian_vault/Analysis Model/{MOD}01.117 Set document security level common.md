---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/Access Rights/COMMON for documents"
domain: "Analysis Model"
element_id: 1880246
diagrams: 3
connections: 9
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.117 Set document security level common

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/Access Rights/COMMON for documents

## 📝 Notes

This technical use case add client document to a particular contract.
It is called from UC 01.114 Set contract document security level and UC 01.116 Set client document security level.

## 🔗 Connections (9)

- → Realisation: [[01.113 Edit client document]]
- → Realisation: [[01.113 Edit client document (status Signed)]]
- → Realisation: [[01.113 Edit client document (statuses before signing)]]
- → Realisation: [[01.113 Edit client document (all salesrooms)]]
- → Realisation: [[01.113 Edit client document (flag PHOTO)]]
- → Realisation: [[01.113 Edit client document(all statuses)]]
- → Dependency: [[01.117 Set security level common]]
- ← Dependency: [[{MOD}01.114 Set contract document security level]]
- ← Dependency: [[01.116 Set client document security level (UseCase 1880226)]]

## 📊 Appears In (3 diagrams)

- Custom: COMMON for documents
- Custom: LOR-8055 Application detail - set document security level
- Use Case: Set document security level
