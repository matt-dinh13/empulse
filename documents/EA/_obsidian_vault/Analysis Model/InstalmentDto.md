---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI"
domain: "Analysis Model"
element_id: 1309268
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 InstalmentDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI

## 📝 Notes

Account instalment.

## 🔗 Connections (3)

- → Dependency: [[MoneyDto (Class 1638510)]]
- → Dependency: [[MoneyDto (Class 1638510)]]
- ← Dependency: [[InstalmentHeadDto (Class 1309267)]]

## 📊 Appears In (3 diagrams)

- Logical: Account UI - Interface diagram - Installment schedule
- Logical: Structures
- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | AccountItemCodeType |  |
| amount | MoneyDto |  |
| prescribedDate | date |  |
| dueDate | date |  |
| paidAmount | MoneyDto |  |
| repaid | boolean |  |
| repaidDate | date |  |
| cancelled | boolean |  |
| cancelledDate | date |  |
| tariffItemTypeCode | TariffItemTypeCodeType |  |
