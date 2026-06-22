---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management"
domain: "Analysis Model"
element_id: 1263441
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ChangeRepaymentChannelFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management

## 📝 Notes

A response structure for ChangeRepaymentChannel method when an error occurred

## 🔗 Connections (3)

- → Dependency: [[ContractDDMResultCode]]
- → Dependency: [[ValidationResultDto]]
- ← Usage: [[ContractPaymentChannelManagementWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractPaymentChannelManagementWS - ChangeContractRepaymentChannel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | ContractDDMResultCode |  |
| validationResult | ValidationResultDto |  |
