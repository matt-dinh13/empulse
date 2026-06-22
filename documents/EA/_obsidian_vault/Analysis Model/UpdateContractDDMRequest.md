---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management"
domain: "Analysis Model"
element_id: 1263449
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 UpdateContractDDMRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management

## 📝 Notes

A request structure for UpdateContractDDM method

## 🔗 Connections (2)

- → Dependency: [[DDMInputDataDto]]
- ← Usage: [[ContractPaymentChannelManagementWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractPaymentChannelManagementWS - UpdateContractDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ddmCode | string |  |
| ddmInputData | DDMInputDataDto |  |
