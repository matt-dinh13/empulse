---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/PartyScoringInputDataWS"
domain: "Analysis Model"
element_id: 1571042
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 PartyContactHistory

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/PartyScoringInputDataWS

## 📝 Notes

History data about the contacts of the party.

## 🔗 Connections (4)

- → Dependency: [[{ADD}SamePrimaryMobile]]
- → Dependency: [[{ADD}PartyMobilePhones]]
- ← Dependency: [[ScoringInputData]]
- → Dependency: [[{ADD}SamePrimaryEmail]]

## 📊 Appears In (1 diagrams)

- Logical: PartyScoringInputDataWS - Get Party Scoring Input Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| partyMobilePhones | PartyMobilePhones |  |
| samePrimaryMobile | SamePrimaryMobile |  |
| samePrimaryEmail | SamePrimaryEmail |  |
