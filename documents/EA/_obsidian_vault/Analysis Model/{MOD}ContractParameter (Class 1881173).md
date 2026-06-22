---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only"
domain: "Analysis Model"
element_id: 1881173
diagrams: 1
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}ContractParameter

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only

## 📝 Notes

A structure of credit parameters of the contract

## 🔗 Connections (9)

- → Dependency: [[RepaymentChannelType (Enumeration 1881191)]]
- → Dependency: [[ProductOfferLimitType (Enumeration 1881188)]]
- → Dependency: [[BankAccount (Class 1881185)]]
- ← Generalization «XSDextension»: [[RevolvingParameter (Class 1881183)]]
- → Dependency: [[CreditType (Enumeration 1881179)]]
- ← Generalization «XSDextension»: [[ClosedEndParameter (Class 1881172)]]
- → Dependency: [[VersionKey (Class 1881170)]]
- → Dependency: [[VersionKey (Class 1881170)]]
- → Dependency: [[InitialTransactionType (Enumeration 1881169)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification v8 (PH only)

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
