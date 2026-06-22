---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/RabbitMQ/DebtFullInfo/v1.0/DebtFullInfoMessage"
domain: "Modules"
element_id: 1792579
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 DebtFullInfo

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/RabbitMQ/DebtFullInfo/v1.0/DebtFullInfoMessage

## 📝 Notes

{ADD IS-2037}
Full info about CEL contract debt and it's repayment.

It is believed that just few basic information about debt change is needed for the immediate collection decisions and AccountBalanceChangeDto should serve this purpose. For the rest of information and collection decisions that do not have to be made immediately there is the DebtFullInfoMessage, which instead of change describes current state, and which can be published less frequentlly. 

More over DebtFullInfoMessage contains even some historical data, e.g. all installments paid after due date, as these data are needed for some collection specific predictors, e.g. the first installment (number) paid after due date in the last 3 month which are difficult to calculate from the historized AccountBalanceChangeDto data.

exchange: bsl.installments.debtfullinfo.direct.exchange

## 🔗 Connections (4)

- → Usage: [[01.486 Calculate debt full info]]
- → Dependency: [[DebtInstallment (Class 1793616)]]
- → Dependency: [[PaidInstallmentTypeOverview]]
- → Dependency: [[IncomingPaymentOverview]]

## 📊 Appears In (1 diagrams)

- Logical: DebtFullInfo

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| incomingPaymentOverview | IncomingPaymentOverview |  |
| debtInstallments | DebtInstallment |  |
| paidInstallmentTypeOverview | PaidInstallmentTypeOverview |  |
