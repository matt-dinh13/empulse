---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA"
domain: "Analysis Model"
element_id: 1821431
diagrams: 1
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 PaymentChannel

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_CONTRACT_DATA

## 📝 Notes

Object containing the data of some particular payment channel.

## 🔗 Connections (9)

- → Dependency: [[Get bank branch data]]
- → Dependency: [[Get external payment card data]]
- → Dependency: [[Get salesroom bank account for payments]]
- → Dependency: [[Get partner data for selected salesroom]]
- → Dependency: [[Get salesroom data]]
- ← Dependency: [[PaymentChannelsType]]
- → Dependency «use»: [[BankAccount (Class 1821412)]]
- → Dependency «use»: [[ExternalPaymentCard]]
- → Dependency «use»: [[PaymentProvider]]

## 📊 Appears In (1 diagrams)

- Logical: HO_CONTRACT_DATA - client data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| purpose | string |  |
| type | string |  |
| sourceType | string |  |
| bankAccount | BankAccount |  |
| externalPaymentCard | ExternalPaymentCard |  |
| paymentProvider | PaymentProvider |  |
