---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management"
domain: "Analysis Model"
element_id: 1309692
diagrams: 6
connections: 6
tags:
  - enumeration
  - analysis-model
---

# 📝 ContractDDMResultCode

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management

## 📝 Notes

A list of possible error codes for contract payment channel operation service

## 🔗 Connections (6)

- ← Dependency: [[CancelContractDDMFault]]
- ← Dependency: [[GetContractDDMListFault]]
- ← Dependency: [[{ADD}ChangeContractDDMStatusFault]]
- ← Dependency: [[CreateContractDDMFault]]
- ← Dependency: [[UpdateContractDDMFault]]
- ← Dependency: [[ChangeRepaymentChannelFault]]

## 📊 Appears In (6 diagrams)

- Logical: ContractPaymentChannelManagementWS - CancelContractDDM
- Logical: ContractPaymentChannelManagementWS - ChangeContractDDMStatus
- Logical: ContractPaymentChannelManagementWS - ChangeContractRepaymentChannel
- Logical: ContractPaymentChannelManagementWS - CreateContractDDM API
- Logical: ContractPaymentChannelManagementWS - GetContractDDMList
- Logical: ContractPaymentChannelManagementWS - UpdateContractDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| INVALID_DATA |  |  |
| SYSTEM_ERROR |  |  |
