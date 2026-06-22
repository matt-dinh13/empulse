---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model"
domain: "Modules"
element_id: 1206994
diagrams: 2
connections: 2
tags:
  - class
  - modules
---

# 🔷 INSTALPAY126

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Incoming Payments/Communication Model

## 📝 Notes

Throw this table the banking system is informed that a particular installment on a revolving loan has been repaid by a payment (payment paired to instalment part) or that repaying has been cancelled (payment unpaired from instalment part).

## 🔗 Connections (2)

- ← Dependency «transformation»: [[PaidInstallmentMessageDto]]
- → Dependency «use»: [[CommResult]]

## 📊 Appears In (2 diagrams)

- Logical: REL Payment Pairing - Communication Model
- Logical: REL Payment Pairing - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | number |  |
| IdPayment | number |  |
| {MOD}PaymentSource | {MOD}IncomingPaymentSourceSystem |  |
| IdCredit | number |  |
| DatePay | date |  |
| IdInstallment | number |  |
| ValuePay | decimal |  |
| TypeInform | RecordTypeInform |  |
| TimeStamp | datetime |  |
| IdResult190 | number |  |
| ResultCode | CommResult |  |
