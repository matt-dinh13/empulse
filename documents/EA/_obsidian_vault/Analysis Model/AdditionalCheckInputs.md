---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/PartyScoringInputDataWS"
domain: "Analysis Model"
element_id: 1571041
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 AdditionalCheckInputs

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/PartyScoringInputDataWS

## 📝 Notes

Additional input attributes needed for performing the selected checks related to the respective party.

## 🔗 Connections (4)

- ← Dependency: [[GetFullpathsForPartyScoringRequest]]
- ← Dependency: [[GetPartyScoringInputDataRequest]]
- → Dependency: [[RelatedPerson]]
- → Dependency: [[Employment (Class 1571030)]]

## 📊 Appears In (2 diagrams)

- Logical: PartyScoringInputDataWS - Get Fullpaths For Party Scoring
- Logical: PartyScoringInputDataWS - Get Party Scoring Input Data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| primaryMobile | string |  |
| primaryEmail | string |  |
| secondaryMobile | string |  |
| relatedPerson | RelatedPerson |  |
| homePhone | string |  |
| employment | Employment |  |
