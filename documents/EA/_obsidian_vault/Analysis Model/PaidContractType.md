---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_PAYMENT_ORDER_FILE"
domain: "Analysis Model"
element_id: 998435
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 PaidContractType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_PAYMENT_ORDER_FILE

## 📝 Notes

List of contracts which are paid by the payment order

## 🔗 Connections (2)

- ← Dependency «use»: [[PaymentOrderType]]
- → Dependency «use»: [[{MOD}NameType]]

## 📊 Appears In (1 diagrams)

- Logical: HO_PAYMENT_ORDER_FILE data source for printout

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| clientName | {MOD}NameType |  |
| contractId | string |  |
