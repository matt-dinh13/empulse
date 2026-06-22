---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest"
domain: "Requirements Model"
element_id: 1357958
diagrams: 3
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 InstallmentPartDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest

## 📝 Notes

It informs OBS about creation or cancellation of installment parts.

## 🔗 Connections (3)

- ← Dependency: [[Change the calculation of interest to accrued interest and future interest]]
- → Dependency: [[InstallmentPartTypeDto]]
- ← Dependency: [[InstallmentDto]]

## 📊 Appears In (3 diagrams)

- Custom: PAYM-1520 (CBL-4166) FER - separation of interest and future interest
- Logical: CEL Installment schedule - Communication model
- Logical: CEL Installment schedule - JMS messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| dataExchangeId | string |  |
| partType | InstallmentPartTypeDto |  |
| tariffItemTypeCode | string |  |
| amount | MoneyDto |  |
