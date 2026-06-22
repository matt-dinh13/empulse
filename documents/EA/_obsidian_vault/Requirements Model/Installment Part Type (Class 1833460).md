---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest"
domain: "Requirements Model"
element_id: 1833460
diagrams: 9
connections: 7
tags:
  - class
  - requirements-model
---

# 🔷 Installment Part Type

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1520 (CBL-4166) FER - separation of interest and future interest

## 📝 Notes

Type of installment part (e.g. principal, interest)

## 🔗 Connections (7)

- ← Dependency: [[Change the calculation of interest to accrued interest and future interest]]
- ← Dependency «use»: [[Amortized Installment Part]]
- ← Dependency: [[Installment Priority]]
- ← Association: [[Installment Included In Operation]]
- ← Dependency: [[Installment Part (Class 1857180)]]
- ← Dependency «use»: [[Contract Accrued Income]]
- ← Dependency: [[Offer Installment Part]]

## 📊 Appears In (9 diagrams)

- Custom: PAYM-1520 (CBL-4166) FER - separation of interest and future interest
- Custom: PAYM-1885 (CBL-4285) - VN Pre-transfer 2 - instalment schedule generating, payments pairing, daily pairing job
- Logical: CBL-1533 Adjust OFP
- Logical: Contract accrued income domain model
- Logical: Contract Write-off domain model
- Logical: Incoming payments
- Logical: Installment Schedule
- Logical: Offer Financial Parameters
- Logical: Types

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| FT (Fee Terminated) |  |  |
| IT (Interest Terminated) |  |  |
| ST (PrincipalTerminated) |  |  |
| F (Fee) |  |  |
| I (Interest) |  |  |
| O (Overpayment) |  |  |
| P (Penalty) |  |  |
| S (Principal (Security)) |  |  |
| IF (Interest Future) |  |  |
| PP (Prepayment) |  |  |
