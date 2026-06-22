---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest"
domain: "Requirements Model"
element_id: 1592138
diagrams: 2
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 InstallmentItem

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest

## 📝 Notes

Entity holds information about installment part.

## 🔗 Connections (3)

- ← Dependency: [[Change the calculation of interest to accrued interest and future interest]]
- → Dependency: [[PairedPayment]]
- ← Dependency: [[InstallmentDto (Class 1592130)]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1520 (CBL-4166) FER - separation of interest and future interest
- Logical: InstallmentScheduleWS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| datePaid | date |  |
| typeCode | string |  |
| typeName | string |  |
| value | decimal |  |
| tariffItemTypeCode | string |  |
| valuePaid | decimal |  |
| payments | PairedPayment |  |
| lastPairingDateTime | timeStamp |  |
