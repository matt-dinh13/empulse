---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/TransWS"
domain: "Analysis Model"
element_id: 1861856
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 PaymentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Collection/TransWS

## 📝 Notes

Entity holds information about payment.

## 🔗 Connections (1)

- → Aggregation: [[GetPaymentsResponse]]

## 📊 Appears In (1 diagrams)

- Logical: TransWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| paymentID | string |  |
| value | decimal |  |
| datePay | date |  |
| dateClient | date |  |
| typeName | string |  |
| typeCode | string |  |
