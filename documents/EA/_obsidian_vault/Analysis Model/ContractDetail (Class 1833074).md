---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS/ContractWS_v8"
domain: "Analysis Model"
element_id: 1833074
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ContractDetail

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Contract/ContractWS/ContractWS_v8

## 📝 Notes

Structure  of basic information about contract

## 🔗 Connections (2)

- → Association: [[GroupChoice (Class 1833073)]]
- ← Dependency: [[ContractForDisbursement (Class 1833072)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractWS_v8

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
| {ADD}signedOnSalesroom | SalesroomCode |  |
| presentedInterestRate | decimal |  |
