---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA"
domain: "Analysis Model"
element_id: 1607545
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ContractDataDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA

## 📝 Notes

Data of the contract for which the request is created

## 🔗 Connections (3)

- ← Dependency: [[LoanServiceRequestDocument]]
- → Dependency: [[{ADD}PresentedInterestRateTypeItems]]
- → Dependency: [[ContractCommodityDto]]

## 📊 Appears In (3 diagrams)

- Logical: HO_SERVICE_REQUEST_DATA
- Logical: HO_SERVICE_REQUEST_DATA - FER printout usage
- Logical: HO_SERVICE_REQUEST_DATA - PER printout usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| annuity | MoneyDto |  |
| contractNumber | string |  |
| firstDueDate | date |  |
| presentedInterestRate1 | decimal |  |
| presentedInterestRate2 | decimal |  |
| signDate | date |  |
| term | int |  |
| lastInstallmentDate | dateTime |  |
| loanAmount | MoneyType |  |
| initTransactionType | string |  |
| sumOfInterest | MoneyType |  |
| commodities | ContractCommodityDto |  |
| {ADD}presentedInterestRates | PresentedInterestRateTypeItems |  |
