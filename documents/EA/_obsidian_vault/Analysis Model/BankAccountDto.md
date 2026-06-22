---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management"
domain: "Analysis Model"
element_id: 1309694
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 BankAccountDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/Contract Payment Channel Management

## 📝 Notes

A basic bank account data for DDM

## 🔗 Connections (2)

- → Dependency: [[AccountTypeDto (Enumeration 1710623)]]
- ← Dependency: [[DDMInputDataDto]]

## 📊 Appears In (2 diagrams)

- Logical: ContractPaymentChannelManagementWS - CreateContractDDM API
- Logical: ContractPaymentChannelManagementWS - UpdateContractDDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountHolderName | string |  |
| bankBranchCode | string |  |
| accountNumber | string |  |
| accountType | AccountTypeDto |  |
