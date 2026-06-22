---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount"
domain: "Analysis Model"
element_id: 1289158
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanOriginationDetailsBaseDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount

## 🔗 Connections (3)

- ← Generalization «XSDextension»: [[InstallmentPlanOriginationDetailsDto]]
- → Generalization «XSDextension»: [[InstallmentPlanCalculationWithoutAccountDetailsDto]]
- ← Generalization «XSDextension»: [[InstallmentPlanCalculationDetailsDto]]

## 📊 Appears In (3 diagrams)

- Logical: CalculateInstallmentPlanWithoutAccount
- Logical: CalculateInstalmentPlan
- Logical: CreateInstalmentPlan

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| financingPackageCode | string |  |
| financingSchemeVersion | int |  |
| financingPackageVersion | int |  |
| financingSchemeCode | string |  |
| financingSchemeVariantNumber | integer |  |
| transferDate | date |  |
