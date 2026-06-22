---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model/Communication tables"
domain: "Modules"
element_id: 815976
diagrams: 16
connections: 20
tags:
  - enumeration
  - modules
---

# 📝 CommResult

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Communication model/Communication tables

## 📝 Notes

Enumeration with all possible results for tables RESULT190 and RESULT290.

## 🔗 Connections (20)

- ← Dependency «use»: [[SELLERPLACE130]]
- ← Dependency: [[CommResultTransformation]]
- ← Dependency «use»: [[RESULT190]]
- ← Dependency «use»: [[RESULT290]]
- ← Dependency «use»: [[EVENT189]]
- ← Dependency «use»: [[EVENT289]]
- ← Dependency «use»: [[REFUNDPAY222]]
- ← Dependency: [[INSTALMENT120]]
- ← Dependency «use»: [[REQUESTPAYMENT135]]
- ← Dependency «use»: [[PAYIN220]]
- ← Dependency «use»: [[INSTALPAY124]]
- ← Dependency «use»: [[INSTALPAY126]]
- ← Dependency: [[ACCRUEDINTEREST162]]
- ← Dependency «use»: [[SECCREDIT170]]
- ← Usage: [[CREDIT110]]
- ← Dependency «use»: [[ACCOPER156]]
- ← Dependency: [[TRANSAC150]]
- ← Dependency «use»: [[TRANSACHEAD160]]
- ← Dependency «use»: [[ORDERPAY140]]
- ← Dependency «use»: [[STATEMENT240]]

## 📊 Appears In (16 diagrams)

- Logical: CEL Account Transactions - Communication tables
- Logical: CEL Installment schedule - Communication tables
- Logical: CEL Payment Pairing - Communication tables
- Logical: COMMON - Communication tables
- Logical: Contract - Communication tables
- Logical: Contract credit account - Communication model
- Logical: Contract sale - Communication model
- Logical: Outgoing payments - Communication tables
- Logical: Processing Incoming Payments - Communication tables
- Logical: Refunds - Communication Model
- Logical: Refunds - Communication tables
- Logical: REL Account Transactions - Communication tables
- Logical: REL Accured Interest - Communication tables
- Logical: REL Payment Pairing - Communication tables
- Logical: REL System Messages - Communication tables
- Logical: Sales Network - Communication model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Value | string |  |
| Is error | boolean |  |
| Comm table | string |  |
