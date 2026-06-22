---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Securitization"
domain: "Analysis Model"
element_id: 1713694
diagrams: 1
connections: 6
tags:
  - class
  - analysis-model
---

# 🔷 SecuritizedContractDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Securitization

## 📝 Notes

A structure of securitized contract

## 🔗 Connections (6)

- ← Dependency: [[SecuritizationTrancheDto (Class 1713698)]]
- → Dependency: [[MoneyDto (Class 1713700)]]
- → Dependency: [[{ADD}OwnerInfoDto]]
- → Dependency: [[SecuritizedFeeItemDto]]
- → Dependency: [[ContractSecuritizationStatusTypeDto]]
- → Dependency: [[SecuritizedPenaltyItemDto]]

## 📊 Appears In (1 diagrams)

- Logical: Generated JMS messages - Contract Securitization

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| status | ContractSecuritizationStatusTypeDto |  |
| statusMessage | string |  |
| accruedInterestOnLastInstallment | MoneyDto |  |
| accruedInterestTillEndOfMonth | MoneyDto |  |
| totalUnpaidPrincipal | MoneyDto |  |
| totalPaidPrincipal | MoneyDto |  |
| totalPaidInterest | MoneyDto |  |
| pastPrescribedPrincipal | MoneyDto |  |
| pastPrescribedInterest | MoneyDto |  |
| salePriceBase | MoneyDto |  |
| salePriceProvided | MoneyDto |  |
| saleFeeProvided | MoneyDto |  |
| securitizedPenalties | SecuritizedPenaltyItemDto |  |
| securitizedFees | SecuritizedFeeItemDto |  |
| {ADD}SoldShare | percent |  |
| {ADD}PreviousOwnerCode | string |  |
| {ADD}OwnershipInfo | OwnerInfoDto |  |
