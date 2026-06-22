---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface/Browse incoming payments"
domain: "Modules"
element_id: 1673198
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Search criteria - From clients

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface/Browse incoming payments

## 📝 Notes

Displayed only if search option From Clients is chosen.

Filters Incoming payments where PaymentType = PFC (Payment from client).

If the both values are entered then TransactionDateTo must be greater or equal to TransactionDateFrom (MSG_COMPARE_GREATER_THAN_EQUAL_DATE).

Interval Transaction date From/To is evaluated according to the rule Filter for Transaction date From/To for Incoming payments with MaxDays = {DEL TVN-6999}366{/DEL}{ADD TVN-6999}31{/ADD} as input parameter.

## 📊 Appears In (1 diagrams)

- Custom: Incoming payments search criteria - From clients
