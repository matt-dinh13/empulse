---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management"
domain: "Analysis Model"
element_id: 1263456
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CancelContractDDMFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management

## 📝 Notes

A response structure for CancelContractDDM method when an error occurred

## 🔗 Connections (3)

- → Dependency: [[ContractDDMResultCode]]
- → Dependency: [[ValidationResultDto]]
- ← Usage: [[ContractPaymentChannelManagementWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractPaymentChannelManagementWS - CancelContractDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | ContractDDMResultCode |  |
| validationResult | ValidationResultDto |  |
