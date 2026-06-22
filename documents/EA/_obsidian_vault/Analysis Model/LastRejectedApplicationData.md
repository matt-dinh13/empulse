---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/PartyScoringInputDataWS"
domain: "Analysis Model"
element_id: 1571054
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 LastRejectedApplicationData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/PartyScoringInputDataWS

## 📝 Notes

Data about the last rejected application of the party.

## 🔗 Connections (1)

- ← Dependency: [[ScoringInputData]]

## 📊 Appears In (1 diagrams)

- Logical: PartyScoringInputDataWS - Get Party Scoring Input Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| rejectionDate | dateTime |  |
| rejectionReason | string |  |
| commodityCategory | string |  |
| creditAmount | decimal |  |
| commodityId | string |  |
