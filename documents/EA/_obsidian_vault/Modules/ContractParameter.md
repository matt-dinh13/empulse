---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages"
domain: "Modules"
element_id: 1750206
diagrams: 1
connections: 7
tags:
  - class
  - modules
---

# 🔷 ContractParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Contract/Communication model/JMS messages

## 📝 Notes

A structure of credit parameters of the contract

## 🔗 Connections (7)

- → Dependency: [[RepaymentChannelType]]
- → Dependency: [[InitialTransactionType (Enumeration 1750203)]]
- ← Generalization «XSDextension»: [[RevolvingParameter]]
- ← Generalization «XSDextension»: [[ClosedEndParameter]]
- → Dependency: [[ProductOfferLimitType]]
- → Dependency: [[BankAccount (Class 1750192)]]
- → Dependency: [[CreditType]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}Contract full info notification - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creditType |  |  |
| initTransactionType | InitialTransactionType |  |
| accountingMethod | string |  |
| currencyCode | string |  |
| presentedInterestRate | decimal |  |
| productCode | string |  |
| productName | string |  |
| productVariantCode | string |  |
| providedCreditAmount | MoneyDto |  |
| repaymentChannel | RepaymentChannelType |  |
| repaymentAccount | BankAccount |  |
| productOfferLimitType | ProductOfferLimitType |  |
| netCashPayment | MoneyDto |  |
