---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstalmentPlan"
domain: "Analysis Model"
element_id: 1466619
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanOriginationDetailsBaseDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstalmentPlan

## 🔗 Connections (2)

- ← Generalization «XSDextension»: [[InstallmentPlanCalculationDetailsDto (Class 1466624)]]
- ← Generalization «XSDextension»: [[InstallmentPlanOriginationDetailsDto (Class 1466635)]]

## 📊 Appears In (2 diagrams)

- Logical: CalculateInstalmentPlan
- Logical: CreateInstalmentPlan

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentPlanServiceCode | string |  |
| installmentPlanType | CodeType |  |
| tenor | positiveInteger |  |
| transferDate | date |  |
| annualInterestRate | decimal |  |
| installmentPlanServiceVariantCode | int |  |
| initialAnnualInterestRate | decimal |  |
| pastDueAnnualInterestRate | decimal |  |
| initialTenor | positiveInteger |  |
| pastDueInitialAnnualInterestRate | decimal |  |
| installmentPlanServiceVersion | positiveInteger |  |
