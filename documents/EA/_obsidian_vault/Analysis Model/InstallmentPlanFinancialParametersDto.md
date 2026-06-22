---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/CalculateInstalmentPlan"
domain: "Analysis Model"
element_id: 1289164
diagrams: 3
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanFinancialParametersDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS_v5/CalculateInstalmentPlan

## 📝 Notes

Installment plan header

## 🔗 Connections (2)

- ← Generalization «XSDextension»: [[InstallmentPlanOverviewDto]]
- ← Dependency: [[{MOD}CalculateInstallmentPlanResponse]]

## 📊 Appears In (3 diagrams)

- Logical: CalculateInstalmentPlan
- Logical: GetInstalmentPlan
- Logical: GetInstalmentPlanList

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| tenor | positiveInteger |  |
| installmentAmount | MoneyDto |  |
| effectiveInterestRate | decimal |  |
| annualInterestRate | decimal |  |
| totalAmount | MoneyDto |  |
| totalFees | MoneyDto |  |
| totalInterest | MoneyDto |  |
| principalAmount | MoneyDto |  |
| initialAnnualInterestRate | decimal |  |
| initialTenor | positiveInteger |  |
