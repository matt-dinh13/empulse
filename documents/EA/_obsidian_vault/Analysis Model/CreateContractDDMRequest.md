---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management"
domain: "Analysis Model"
element_id: 1263452
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 CreateContractDDMRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management

## 📝 Notes

A request structure for CreateContractDDM method

## 🔗 Connections (2)

- → Dependency: [[DDMInputDataDto]]
- ← Usage: [[ContractPaymentChannelManagementWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractPaymentChannelManagementWS - CreateContractDDM API

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| ddm | DDMInputDataDto |  |
