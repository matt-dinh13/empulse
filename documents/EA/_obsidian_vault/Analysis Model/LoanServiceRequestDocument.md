---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA"
domain: "Analysis Model"
element_id: 1607553
diagrams: 3
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 LoanServiceRequestDocument

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA

## 📝 Notes

Data source structure for a Loan Service Request (LSR) of particular type

## 🔗 Connections (9)

- → Association: [[{MOD}RequestTypeChoice]]
- → Dependency: [[EvaluatedBonusService]]
- → Dependency: [[{ADD}PresentedInterestRateTypeItems]]
- → Dependency: [[Generate barcode]]
- → Dependency: [[RequestFeeData]]
- → Dependency: [[ClientDataDto]]
- → Dependency: [[ProposedInstallmentsType]]
- → Dependency: [[ContractDataDto (Class 1607545)]]
- → Dependency: [[LoanServiceRequestType]]

## 📊 Appears In (3 diagrams)

- Logical: HO_SERVICE_REQUEST_DATA
- Logical: HO_SERVICE_REQUEST_DATA - FER printout usage
- Logical: HO_SERVICE_REQUEST_DATA - PER printout usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| clientData | ClientDataDto |  |
| contractData | ContractDataDto |  |
| barCode | string |  |
| createdDate | dateTime |  |
| expirationDate | date |  |
| chargedFees | RequestFeeData |  |
| underMoratoriumYN | boolean |  |
| requestType | LoanServiceRequestTypeDto |  |
| userName | string |  |
| userCode | string |  |
| proposedInstallments | ProposedInstallmentsType |  |
| moratoriumLength | int |  |
| bonusServices | EvaluatedBonusService |  |
| expectedPresentedInterestRates | PresentedInterestRateTypeItems |  |
| {ADD}requestOrigination | string |  |
