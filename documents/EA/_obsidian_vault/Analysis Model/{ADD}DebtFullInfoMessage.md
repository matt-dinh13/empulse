---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Debt/Debt Full Info"
domain: "Analysis Model"
element_id: 1318533
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}DebtFullInfoMessage

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Debt/Debt Full Info

## 📝 Notes

{ADD PBR-830 /}
Full info about CEL contract debt and it's repayment.

It is believed that just few basic information about debt change is needed for the immediate collection decisions and AccountBalanceChangeDto should serve this purpose. For the rest of information and collection decisions that do not have to be made immediately there is the DebtFullInfoMessage, which instead of change describes current state, and which can be published less frequentlly. 

More over DebtFullInfoMessage contains even some historical data, e.g. all installments paid after due date, as these data are needed for some collection specific predictors, e.g. the first installment (number) paid after due date in the last 3 month which are difficult to calculate from the historized AccountBalanceChangeDto data.

## 🔗 Connections (3)

- → Dependency: [[{ADDIncomingPaymentOverviewDto]]
- → Dependency: [[{ADD}PaidInstallmentTypeOverviewDto]]
- → Dependency: [[{ADD}DebtInstallmentDto]]

## 📊 Appears In (1 diagrams)

- Logical: {DEL}Debt full info

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| debtInstallments | DebtInstallmentDto |  |
| paidInstallmentTypeOverviews | PaidInstallmentTypeOverviewDto |  |
| incomingPaymentOverview | IncomingPaymentOverview |  |
