---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Installment Schedule/Communication model"
domain: "Modules"
element_id: 996538
diagrams: 2
connections: 6
tags:
  - class
  - modules
---

# 🔷 INSTALMENT125

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Installment Schedule/Communication model

## 📝 Notes

Informs banking system that a new installment (a part of minimal monthly installment or irregular installment) was created for revolving loan contract (debit card, credit card) or that some existing installment has been canceled.

## 🔗 Connections (5)

- ← Dependency «transformation»: [[InstalmentMessageDto]]
- → Dependency «use»: [[INSTALMENT125 TypeInstalHead]]
- → Dependency «use»: [[RecordTypeInform]]
- → Dependency: [[REL Allocation Type]]
- → Dependency «use»: [[INSTALMENT125 ReconciliationType]]

## 📊 Appears In (2 diagrams)

- Logical: REL Installment schedule - Communication model
- Logical: REL Installment schedule - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | number |  |
| IdCredit | number |  |
| IdInstallment | number |  |
| TypeInstalhead | INSTALMENT125 TypeInstalHead |  |
| TypeInstalment | string |  |
| TypeReconciliation | INSTALMENT125 ReconciliationType |  |
| ValueInstalment | decimal |  |
| DateDue | date |  |
| TypeInform | RecordTypeInform |  |
| TimeStamp | dateTime |  |
| IdResult190 | number |  |
| ResultCode | string |  |
| Allocation | REL Allocation Type |  |
