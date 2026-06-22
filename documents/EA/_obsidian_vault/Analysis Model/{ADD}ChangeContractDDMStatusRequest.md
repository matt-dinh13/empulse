---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management"
domain: "Analysis Model"
element_id: 1263457
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}ChangeContractDDMStatusRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management

## 📝 Notes

{ADD CLM-1204/ }
A request structure for ChangeContractDDMStatus method

## 🔗 Connections (2)

- → Dependency: [[{ADD}DDMChangedStatusDto]]
- ← Dependency: [[ContractPaymentChannelManagementWS]]

## 📊 Appears In (1 diagrams)

- Logical: ContractPaymentChannelManagementWS - ChangeContractDDMStatus

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ddmCode | string |  |
| ddmStatus | {ADD}DDMChangedStatusDto |  |
| confirmationRemark | string |  |
