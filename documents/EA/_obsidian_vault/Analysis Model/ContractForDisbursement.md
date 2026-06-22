---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833300
diagrams: 1
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ContractForDisbursement

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 🔗 Connections (4)

- ← Dependency: [[GetContractForDisbursementResponse]]
- → Dependency: [[CustomerData (Class 1833316)]]
- → Dependency: [[ContractDetail]]
- → Dependency: [[PaymentToDisburse]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS - GetContractForDisbursement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractData | ContractDetail |  |
| paymentRecipientData | PaymentToDisburse |  |
| customerData | CustomerData |  |
