---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/RESULT tables/Communication Model/Communication tables"
domain: "Modules"
element_id: 815979
diagrams: 6
connections: 7
tags:
  - class
  - modules
---

# 🔷 RESULT290

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/RESULT tables/Communication Model/Communication tables

## 📝 Notes

Confirmation of communication message (HoSel -> OBS).

## 🔗 Connections (7)

- → Dependency «use»: [[CommResult]]
- → Dependency «use»: [[CommResultErrorStatusType]]
- ← Dependency «transformation»: [[RefundPaymentResponse]]
- ← Dependency «transformation»: [[IncomingPaymentResponse]]
- ← Dependency «transformation»: [[DisbursementConfirmationResponse]]
- ← Dependency «transformation»: [[DisbursementConfirmationResponse (Class 1602948)]]
- ← Dependency «transformation»: [[{DEL}ContractCreditAccountResponse]]

## 📊 Appears In (6 diagrams)

- Logical: COMMON - Communication tables
- Logical: Contract credit account - Communication model
- Logical: Outgoing payments - Communication Model
- Logical: Outgoing payments - Communication tables
- Logical: Processing Incoming Payments - Communication Model
- Logical: Refunds - Communication Model

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | string |  |
| Id record | string |  |
| Type message | string |  |
| Result Code | CommResult |  |
| Time stamp | Date Time |  |
| Note | string |  |
| Error | CommResultErrorStatusType |  |
