---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest"
domain: "Requirements Model"
element_id: 1833357
diagrams: 4
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 InstallmentPartDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest

## 📝 Notes

It contains data of installment parts related to an installment

LDM souce:
Installment->InstallmentPart

## 🔗 Connections (2)

- → Dependency: [[InstallmentPartTypeDto (Enumeration 1833361)]]
- ← Dependency: [[InstallmentDto (Class 1833359)]]

## 📊 Appears In (4 diagrams)

- Custom: PAYM-1520 (CBL-4166) FER - separation of interest and future interest
- Custom: PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update
- Logical: Generated messages - Installment Schedule Info Request
- Logical: Generated messages - WriteOffNotification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| dataExchangeId | string |  |
| partType | InstallmentPartTypeDto |  |
| tariffItemTypeCode | string |  |
| amount | MoneyDto |  |
| {ADD}paidAmount | MoneyDto |  |
