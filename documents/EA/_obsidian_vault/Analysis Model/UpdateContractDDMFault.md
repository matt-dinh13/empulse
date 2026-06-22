---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management"
domain: "Analysis Model"
element_id: 1263445
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 UpdateContractDDMFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management

## 📝 Notes

A response structure for UpdateContractDDM method when an error occurred

## 🔗 Connections (3)

- → Dependency: [[ValidationResultDto]]
- → Dependency: [[ContractDDMResultCode]]
- ← Usage: [[ContractPaymentChannelManagementWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractPaymentChannelManagementWS - UpdateContractDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | {ADD}ContractDDMResultCode |  |
| validationResults | ValidationResultDto |  |
