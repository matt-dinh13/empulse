---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/Validation Rules"
domain: "Modules"
element_id: 1673239
diagrams: 4
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Incoming payment unpairing is alowed

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/Validation Rules

## 📝 Notes

{DEL MODULARIZATION}All active pairing records of Incoming payment are not locked.{/DEL}
{ADD MODULARIZATION}
Allowed only if Incoming Payment.Type->IncomingPaymentType.manualUnpairningAllowed = true.
{/ADD}



If validation fails, message MSG_LOCKED_INCOMING_PAYMENT_PAIRING is showed

## 🔗 Connections (1)

- ← Dependency: [[{MOD}05.060 Decouple incoming payment manually]]

## 📊 Appears In (4 diagrams)

- Custom: Validation Rules
- Custom: Validation Rules
- Use Case: Cancellation incoming payment manually
- Use Case: Couple and decouple incoming payment manually
