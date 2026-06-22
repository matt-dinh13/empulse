---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS"
domain: "Analysis Model"
element_id: 1833299
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ContractDetail

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS

## 📝 Notes

Structure  of basic information about contract

## 🔗 Connections (3)

- ← Dependency: [[GetContractDetailResponse]]
- ← Dependency: [[ContractForDisbursement]]
- → Association: [[GroupChoice (Class 1833313)]]

## 📊 Appears In (2 diagrams)

- Logical: ContractWS - GetContractDetail method
- Logical: ContractWS - GetContractForDisbursement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| contractType | CreditType |  |
| contractStatus | External Reference |  |
| initTransactionType | InitialTransactionType |  |
| productCode | string |  |
| productVersion | int |  |
| productBusinessDescription | string |  |
| providedCreditAmount | MoneyDto |  |
| lastContractStatusChange | dateTime |  |
| signatureDate | dateTime |  |
| installmentDueDay | positiveInteger |  |
| presentedInterestRate | decimal |  |
