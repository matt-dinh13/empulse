---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/PartyScoringInputDataWS"
domain: "Analysis Model"
element_id: 1571040
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PartyApplicationHistory

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/PartyScoringInputDataWS

## 📝 Notes

History data about the applications of the party.

## 🔗 Connections (2)

- → Dependency: [[ApplicationWithPhoto]]
- ← Dependency: [[ScoringInputData]]

## 📊 Appears In (1 diagrams)

- Logical: PartyScoringInputDataWS - Get Party Scoring Input Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| activeApplicationsCount | int |  |
| notActivatedApplicationsCount | int |  |
| signedApplicationsWithValidDDMCount | int |  |
| applicationsWithPhoto | ApplicationWithPhoto |  |
| applicationsCountLastMonth | int |  |
| applicationsCountLast3Months | int |  |
| rejectedApplicationsCountLast9Months | int |  |
| openedCredit | boolean |  |
