---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application Evaluation/PCGApprovalProcessData"
domain: "Analysis Model"
element_id: 1190894
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ApprovalProcessDataRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application Evaluation/PCGApprovalProcessData

## 🔗 Connections (3)

- → Generalization: [[BaseRequest]]
- → Dependency: [[ProductType]]
- ← Dependency: [[PCGApprovalProcessDataWS]]

## 📊 Appears In (1 diagrams)

- Logical: PCGApprovalProcessData

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| chosenOfferCode | string |  |
| commodityExternalIds | string |  |
| salesroomCode | int |  |
| salesroomCodes | int |  |
| productType | ProductType |  |
