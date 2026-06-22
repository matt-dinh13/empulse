---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - IN only"
domain: "Analysis Model"
element_id: 1881547
diagrams: 1
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}ContractParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - IN only

## 📝 Notes

A structure of credit parameters of the contract

## 🔗 Connections (9)

- → Dependency: [[RepaymentChannelType (Enumeration 1881560)]]
- → Dependency: [[BankAccount (Class 1881566)]]
- ← Generalization «XSDextension»: [[RevolvingParameter (Class 1881550)]]
- → Dependency: [[ProductOfferLimitType (Enumeration 1881557)]]
- → Dependency: [[VersionKey (Class 1881553)]]
- → Dependency: [[VersionKey (Class 1881553)]]
- → Dependency: [[InitialTransactionType (Enumeration 1881569)]]
- → Dependency: [[CreditType (Enumeration 1881552)]]
- ← Generalization «XSDextension»: [[ClosedEndParameter (Class 1881548)]]

## 📊 Appears In (1 diagrams)

- Logical: v8 - IN only

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
| disbursementChannel | string |  |
| financialSchemaVariantCode | string |  |
