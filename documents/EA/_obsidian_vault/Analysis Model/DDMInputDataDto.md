---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management"
domain: "Analysis Model"
element_id: 1309693
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 DDMInputDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management

## 📝 Notes

A structure of DDM data used as input on create/update DDM

## 🔗 Connections (3)

- ← Dependency: [[CreateContractDDMRequest]]
- ← Dependency: [[UpdateContractDDMRequest]]
- → Dependency: [[BankAccountDto]]

## 📊 Appears In (2 diagrams)

- Logical: ContractPaymentChannelManagementWS - CreateContractDDM API
- Logical: ContractPaymentChannelManagementWS - UpdateContractDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| limitAmount | MoneyDto |  |
| ddmBankAccount | BankAccountDto |  |
| validFrom | date |  |
| validTo | date |  |
| {DEL}eMandate | boolean |  |
| {ADD}ddmType | string |  |
| {ADD}externalDDProvider  | string |  |
