---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractOperationWS"
domain: "Analysis Model"
element_id: 1706215
diagrams: 2
connections: 2
tags:
  - enumeration
  - analysis-model
---

# 📝 CancelContractFaultType

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractOperationWS

## 📝 Notes

A list of result error codes in case of the fault response

## 🔗 Connections (2)

- ← Dependency: [[CancelSignedContractFault]]
- ← Dependency: [[{ADD}CancelActiveContractFault]]

## 📊 Appears In (2 diagrams)

- Logical: ContractOperationWS - Cancel active contract
- Logical: ContractOperationWS - Cancel signed contract

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CONTRACT_IN_WRONG_STATUS |  |  |
| CONTRACT_NOT_FOUND |  |  |
| INCOMING_PAYMENT_PAIRED |  |  |
| CANCEL_LOYALTY_ACC_REQUEST_FAILED |  |  |
| CANCEL_ACCOUNT_REQUEST_FAILED |  |  |
| CANCELLATION_REASON_NOT_FOUND |  |  |
| SYSTEM_ERROR |  |  |
