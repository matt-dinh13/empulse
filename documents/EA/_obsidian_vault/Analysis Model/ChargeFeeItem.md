---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/TransWS"
domain: "Analysis Model"
element_id: 1861862
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ChargeFeeItem

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/TransWS

## 🔗 Connections (1)

- → Aggregation: [[ChargeFeesRequest]]

## 📊 Appears In (1 diagrams)

- Logical: TransWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| chargeID | string |  |
| contractNumber | string |  |
| chargeDate | date |  |
| feeType | string |  |
| amount | decimal |  |
| relatedInstallment | int |  |
| penalizationStartDate | date |  |
| penalizationEndDate | date |  |
| chargingReason | string |  |
