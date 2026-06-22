---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/TransWS"
domain: "Analysis Model"
element_id: 1861854
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 CancelFeeItem

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/TransWS

## 📝 Notes

Entity holds information about fees which are required to be canceled by external system.

## 🔗 Connections (1)

- → Aggregation: [[CancelFeesRequest]]

## 📊 Appears In (1 diagrams)

- Logical: TransWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractNumber | string |  |
| feeID | string |  |
| cancellationReason | string |  |
