---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS/ContractWS_v8"
domain: "Analysis Model"
element_id: 1833072
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ContractForDisbursement

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS/ContractWS_v8

## 🔗 Connections (4)

- ← Dependency: [[GetContractForDisbursementResponse (Class 1833065)]]
- → Dependency: [[ContractDetail (Class 1833074)]]
- → Dependency: [[CustomerData]]
- → Dependency: [[PaymentToDisburse (Class 1833077)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS_v8

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractData | ContractDetail |  |
| paymentRecipientData | PaymentToDisburse |  |
| customerData | CustomerData |  |
