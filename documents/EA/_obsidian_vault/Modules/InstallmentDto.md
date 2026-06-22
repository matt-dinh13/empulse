---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Installment Schedule/Communication model"
domain: "Modules"
element_id: 1357957
diagrams: 2
connections: 5
tags:
  - class
  - modules
---

# 🔷 InstallmentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Installment Schedule/Communication model

## 📝 Notes

It informs OBS about creation or cancellation of installments.

## 🔗 Connections (5)

- ← Dependency: [[InstallmentScheduleInfoRequest]]
- → Dependency: [[RecalculationReasonTypeDto]]
- → Dependency: [[InstallmentPartDto]]
- → Dependency: [[InstallmentOperationTypeDto]]
- → Dependency: [[InstallmentTypeDto]]

## 📊 Appears In (2 diagrams)

- Logical: CEL Installment schedule - Communication model
- Logical: CEL Installment schedule - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentParts | InstallmentPartDto |  |
| installmentType | InstallmentTypeDto |  |
| recalculationReason | RecalculationReasonTypeDto |  |
| typeOfOperation | InstallmentOperationTypeDto |  |
| dueDate | date |  |
| installmentNumber | number |  |
| createdInVersion | number |  |
| deactivatedInVersion | number |  |
