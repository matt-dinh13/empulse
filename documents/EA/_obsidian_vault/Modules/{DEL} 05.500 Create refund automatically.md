---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Access Rights"
domain: "Modules"
element_id: 1869257
diagrams: 4
connections: 9
tags:
  - usecase
  - modules
---

# 🎯 {DEL} 05.500 Create refund automatically

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Refunds/Access Rights

## 📝 Notes

Use case is NOT USED. This use case was called on KZ or during cacellation of overpayment process before Refund creation was moved to INCPAY module.

The use case automatically creates a refund (or refunds) from overpayments related to the provided contract. If an incoming payment is paired also to other installments than overpayment only, the function divide the payment to two parts so that the whole payment amount is only paired to the overpayment.
Next, if a recipient's bank account is recognized, the outgoing payment with the respective payment channel is automatically created.

This use case is called from BSL via request for refund creation (for cancel overpayment functionality).
{DEL}The function is only available for CEL contract types in connection of some loan option services (e.g. Fees-back service) {ADD CBL-7789} or CEL loans called by incoming payment request where operation type is CANCEL_OVP.{/ADD}{/DEL}

## 🔗 Connections (9)

- → Realisation: [[05.500 Create refund automatically]]
- → UseCase «include»: [[{MOD}05.180 Perform coupling payments with instalments (UseCase 1854294)]]
- → UseCase «include»: [[05.182 Pair payment with contract (UseCase 1854310)]]
- → Dependency: [[{MOD}Saving of Payment Channels]]
- → Dependency: [[ALG_Divide incoming payment]]
- → Realisation: [[REQ3 Saving client account for refunds]]
- → UseCase «include»: [[05.045 Cancel incoming payment (UseCase 1855717)]]
- → UseCase «include»: [[{MOD}05.097 Generate outgoing payment for refund]]
- ← Association: [[BSL (Actor 1877513)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Use Case: {DEL}Creating Refunds automatically
- Use Case: Fees-back service evaluation and processing
- Use Case: OVERVIEW - Installment Schedule
