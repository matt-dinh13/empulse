---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model"
domain: "Modules"
element_id: 1206995
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 INSTALPAY124

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model

## 📝 Notes

Throw this table the banking system is informed that a particular installment on a closed-end loan has been repaid by a payment (payment paired to instalment part) or that repaying has been cancelled (payment unpaired from instalment part).

## 🔗 Connections (3)

- ← Dependency «transformation»: [[PaymentPairingInfoDto]]
- → Dependency «use»: [[CommResult]]
- → Dependency «use»: [[RecordTypeInform]]

## 📊 Appears In (2 diagrams)

- Logical: CEL Payment Pairing - Communication Model
- Logical: CEL Payment Pairing - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Date pay | date |  |
| Id | number |  |
| Id credit | number |  |
| Id installment | number |  |
| Id payment | number |  |
| {MOD}PaymentSource | {MOD}IncomingPaymentSourceSystem |  |
| Value pay | decimal |  |
| TypeInform | RecordTypeInform |  |
| Time stamp | datetime |  |
| Id result190 | number |  |
| Result code | CommResult |  |
