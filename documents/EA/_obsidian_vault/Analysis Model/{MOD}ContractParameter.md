---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification"
domain: "Analysis Model"
element_id: 1880122
diagrams: 1
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}ContractParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/v7/ContractFullInfo notification

## 📝 Notes

A structure of credit parameters of the contract

## 🔗 Connections (9)

- → Dependency: [[CreditType (Enumeration 1880116)]]
- → Dependency: [[VersionKey]]
- → Dependency: [[BankAccount (Class 1880128)]]
- → Dependency: [[ProductOfferLimitType (Enumeration 1880127)]]
- → Dependency: [[InitialTransactionType (Enumeration 1880125)]]
- → Dependency: [[RepaymentChannelType (Enumeration 1880129)]]
- → Dependency: [[VersionKey]]
- ← Generalization «XSDextension»: [[ClosedEndParameter (Class 1880120)]]
- ← Generalization «XSDextension»: [[RevolvingParameter (Class 1880109)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| creditType |  |  |
| initTransactionType | InitialTransactionType |  |
| accountingMethod | string |  |
| currencyCode | string |  |
| presentedInterestRate | decimal |  |
| productName | string |  |
| productVariantCode | string |  |
| providedCreditAmount | MoneyDto |  |
| repaymentChannel | RepaymentChannelType |  |
| repaymentAccount | BankAccount |  |
| productOfferLimitType | ProductOfferLimitType |  |
| netCashPayment | MoneyDto |  |
| product | VersionKey |  |
| financialSchema | VersionKey |  |
| financialSchemaVariantCode | string |  |
| disbursementChannel | string |  |
