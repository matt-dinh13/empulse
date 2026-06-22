---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Party Scoring Input Data/Access Rights"
domain: "Analysis Model"
element_id: 1796345
diagrams: 4
connections: 2
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD} 01.197 Get Previous applications data

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Party Scoring Input Data/Access Rights

## 📝 Notes

This use case is called by external system via REST API. Once called, it calculates the applicable fullpaths for scoring for respective applications/contracts provided in request.

## 🔗 Connections (2)

- ← Realisation: [[{ADD} PreviousApplicationDetails]]
- → Realisation: [[{ADD} 1.197 Get Previous Applications Data]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: LOR-9931 New API for previous application data
- Logical: RestAPI
- Use Case: Use Case
