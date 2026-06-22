---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_PAYMENT_ORDER_FILE"
domain: "Analysis Model"
element_id: 998437
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 DocumentData

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_PAYMENT_ORDER_FILE

## 📝 Notes

Payment Order file printout - header of document data

## 🔗 Connections (2)

- → Dependency «use»: [[PaymentOrderType]]
- ← Generalization: [[paymentOrderFile]]

## 📊 Appears In (1 diagrams)

- Logical: HO_PAYMENT_ORDER_FILE data source for printout

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| generationDate | dateTime |  |
| paymentFileID | string |  |
| paymentOrders | PaymentOrderType |  |
| sumOfOrders | int |  |
