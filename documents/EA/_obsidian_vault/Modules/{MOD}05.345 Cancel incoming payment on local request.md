---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process internal request on incoming payment/Access Rights"
domain: "Modules"
element_id: 1673181
diagrams: 4
connections: 4
tags:
  - usecase
  - modules
---

# 🎯 {MOD}05.345 Cancel incoming payment on local request

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Process internal request on incoming payment/Access Rights

## 📝 Notes

The use case receives request to cancel an incoming payment from a local HoSel system (i.e. CaBus). After canceling the payment, it sent request to unpair the payment back to the calling system.
This function is used to cancel a "technical" payment type (small underpayment now).

## 🔗 Connections (3)

- → UseCase «include»: [[05.045 Cancel incoming payment (UseCase 1877227)]]
- → Realisation: [[05.345 Cancel incoming payment on local request]]
- ← UseCase: [[System (Actor 1877517)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: Access Rights
- Logical: Incoming Payments Module - PaymentManagementWS (for local systems)
- Use Case: Cancelation incoming payment on internal component request
