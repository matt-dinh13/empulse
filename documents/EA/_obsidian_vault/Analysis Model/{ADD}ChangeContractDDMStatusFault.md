---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management"
domain: "Analysis Model"
element_id: 1263450
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}ChangeContractDDMStatusFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management

## 📝 Notes

{ADD CLM-1204/ }
A response structure for ChangeContractDDMStatus method when an error occurred

## 🔗 Connections (3)

- → Dependency: [[ValidationResultDto]]
- → Dependency: [[ContractDDMResultCode]]
- ← Dependency: [[ContractPaymentChannelManagementWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractPaymentChannelManagementWS - ChangeContractDDMStatus

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | {ADD}ContractDDMResultCode |  |
| validationResults | ValidationResultDto |  |
