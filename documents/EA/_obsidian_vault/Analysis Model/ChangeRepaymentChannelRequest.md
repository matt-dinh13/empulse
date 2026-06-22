---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management"
domain: "Analysis Model"
element_id: 1263444
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ChangeRepaymentChannelRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management

## 📝 Notes

A request structure for ChangeRepaymentChannel method

## 🔗 Connections (2)

- → Dependency: [[RepaymentChannelTypeDto]]
- ← Usage: [[ContractPaymentChannelManagementWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractPaymentChannelManagementWS - ChangeContractRepaymentChannel

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| repaymentChannelType | RepaymentChannelTypeDto |  |
