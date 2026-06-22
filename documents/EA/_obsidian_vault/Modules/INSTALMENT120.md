---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Installment Schedule/Communication model"
domain: "Modules"
element_id: 996539
diagrams: 2
connections: 6
tags:
  - class
  - modules
---

# 🔷 INSTALMENT120

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Installment Schedule/Communication model

## 📝 Notes

It informs OBS about creation or cancellation of installment parts for CEL.

## 🔗 Connections (6)

- ← Dependency «transformation»: [[InstallmentScheduleInfoRequest]]
- → Dependency: [[CommResult]]
- → Dependency «use»: [[INSTALMENT120 InstalmentHeaderType]]
- → Dependency «use»: [[INSTALMENT120 RecalculationReason]]
- → Dependency «use»: [[RecordTypeInform]]
- → Dependency «use»: [[INSTALMENT120 TypeInstalment]]

## 📊 Appears In (2 diagrams)

- Logical: CEL Installment schedule - Communication model
- Logical: CEL Installment schedule - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | number |  |
| IdInstalment | number |  |
| IdCredit | number |  |
| TypeInstalment | INSTALMENT120 TypeInstalment |  |
| IsTerminated | boolean |  |
| InstalmentHeaderType | INSTALMENT120 InstalmentHeaderType  |  |
| RecalculationReason | INSTALMENT120 RecalculationReason |  |
| DueDate | date |  |
| NumInstalment | number |  |
| ValueInstalment | decimal |  |
| TypeInform | RecordTypeInform |  |
| Version | number |  |
| PackCount | number |  |
| Timestamp | datetime |  |
| IdResult190 | number |  |
| ResultCode | CommResult |  |
