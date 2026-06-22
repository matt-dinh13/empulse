---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/PartyScoringInputDataWS"
domain: "Analysis Model"
element_id: 1571047
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 LastApplicationData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/PartyScoringInputDataWS

## 📝 Notes

Data about the last application of the party.

## 🔗 Connections (3)

- → Dependency: [[InternalCodeData]]
- ← Dependency: [[ScoringInputData]]
- → Dependency: [[InternalCodeData]]

## 📊 Appears In (1 diagrams)

- Logical: PartyScoringInputDataWS - Get Party Scoring Input Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| status | string |  |
| creationDate | dateTime |  |
| primaryMobile | string |  |
| internalCode1 | InternalCodeData |  |
| internalCode2 | InternalCodeData |  |
