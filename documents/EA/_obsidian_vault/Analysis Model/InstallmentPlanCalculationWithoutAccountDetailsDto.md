---
type: Class
stereotype: "XSDtopLevelElement"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount"
domain: "Analysis Model"
element_id: 1243779
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 InstallmentPlanCalculationWithoutAccountDetailsDto

> **Type**: Class · **Stereotype**: «XSDtopLevelElement»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/InstallmentPlanWS/CalculateInstallmentPlanWithoutAccount

## 🔗 Connections (2)

- ← Dependency: [[CalculateInstallmentPlanWithoutAccountRequest]]
- ← Generalization «XSDextension»: [[InstallmentPlanOriginationDetailsBaseDto]]

## 📊 Appears In (1 diagrams)

- Logical: CalculateInstallmentPlanWithoutAccount

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| billingDay | int |  |
| dueDateShift | int |  |
| fixedDueDay | int |  |
| transactionType | TransactionTypeDto |  |
| transferAmount | PositiveMoneyDto |  |
