---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest"
domain: "Requirements Model"
element_id: 1833361
diagrams: 5
connections: 1
tags:
  - enumeration
  - requirements-model
---

# 📝 InstallmentPartTypeDto

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest

## 📝 Notes

Enumeration of installment part types

## 🔗 Connections (1)

- ← Dependency: [[InstallmentPartDto (Class 1833357)]]

## 📊 Appears In (5 diagrams)

- Custom: PAYM-1520 (CBL-4166) FER - separation of interest and future interest
- Custom: PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update
- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job
- Logical: Generated JMS messages - Incoming payments pairing
- Logical: Generated messages - Installment Schedule Info Request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| S (Principal) |  |  |
| ST (Principal terminated) |  |  |
| P (Penalty) |  |  |
| O (Overpayment) |  |  |
| IT (Interest terminated) |  |  |
| I (Interest) |  |  |
| FT (Fee terminated) |  |  |
| F (Fee) |  |  |
| IF (Interest Future) |  |  |
| PP (Prepayment) |  |  |
