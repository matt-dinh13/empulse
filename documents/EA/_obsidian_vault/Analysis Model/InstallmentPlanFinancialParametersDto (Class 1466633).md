---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount"
domain: "Analysis Model"
element_id: 1466633
diagrams: 4
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanFinancialParametersDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount

## 📝 Notes

Installment plan header

## 🔗 Connections (3)

- ← Dependency: [[CalculateInstallmentPlanWithoutAccountResponse]]
- ← Generalization «XSDextension»: [[InstallmentPlanOverviewDto (Class 1466638)]]
- ← Dependency: [[CalculateInstallmentPlanResponse]]

## 📊 Appears In (4 diagrams)

- Logical: CalculateInstallmentPlanWithoutAccount
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
