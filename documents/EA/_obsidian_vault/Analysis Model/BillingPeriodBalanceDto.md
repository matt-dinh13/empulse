---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI"
domain: "Analysis Model"
element_id: 1611771
diagrams: 3
connections: 5
tags:
  - class
  - analysis-model
---

# 🔷 BillingPeriodBalanceDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI

## 📝 Notes

Billing period balance structure contains result of end of month processing. 

	
- debt* means debt at the period end. 
	
- per* means sum per given period. 
	
- sum* means cumulative sum per account life cycle including this period.

## 🔗 Connections (5)

- ← Dependency «use»: [[ui_GetAccountBillingPeriodBalancesResponse]]
- → Dependency: [[MoneyDto (Class 1638510)]]
- → Dependency: [[TariffItemTypeMoneyPair]]
- → Dependency: [[BillingSessionTypeDto]]
- ← Dependency: [[RepaymentSimulationResponseBase]]

## 📊 Appears In (3 diagrams)

- Logical: Account UI - Interface diagram - Balances
- Logical: AccountManagementWS - Terminate account
- Logical: COMMON (v2)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| periodStart | date |  |
| periodEnd | date |  |
| startBalance | MoneyDto |  |
| endBalance | MoneyDto |  |
| prescribedInstalment | MoneyDto |  |
| debtFee | MoneyDto |  |
| debtInsurance | MoneyDto |  |
| debtInterest | MoneyDto |  |
| debtPrincipal | MoneyDto |  |
| debtPenalty | MoneyDto |  |
| debtOther | MoneyDto |  |
| dueDate | date |  |
| dueDateClient | date |  |
| dueDateGracePeriod | date |  |
| perCredit | MoneyDto |  |
| perDebit | MoneyDto |  |
| perFee | MoneyDto |  |
| perInsurance | MoneyDto |  |
| perDebitInterest | MoneyDto |  |
| perCreditInterest | MoneyDto |  |
| perPayments | MoneyDto |  |
| perNoTransaction | long |  |
| perPenalty | MoneyDto |  |
| perOther | MoneyDto |  |
| sumFee | MoneyDto |  |
| sumInsurance | MoneyDto |  |
| sumDebitInterest | MoneyDto |  |
| sumCreditInterest | MoneyDto |  |
| sumPayments | MoneyDto |  |
| sumTransaction | MoneyDto |  |
| sumPenalty | MoneyDto |  |
| sumOther | long |  |
| creditLimit | MoneyDto |  |
| availableBalance | MoneyDto |  |
| cancelled | boolean |  |
| holdAmount | MoneyDto |  |
| outstandingDebt | MoneyDto |  |
| ownFunds | MoneyDto |  |
| overdraft | MoneyDto |  |
| simulationOnly | boolean |  |
| debtByTariffItemTypes | TariffItemTypeMoneyPair |  |
