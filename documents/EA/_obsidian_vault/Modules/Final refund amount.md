---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface"
domain: "Modules"
element_id: 1880349
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Final refund amount

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface

## 📝 Notes

If Charge processing fee = TRUE, than Final refund amount = Refund amount - Processing fee amount 
 - if Processing fee amount > refund amount, than Final refund amount = 0
else if Charge processing fee = FALSE, than Final refund amount = Refund amount

## 📊 Appears In (1 diagrams)

- Custom: Manage overpayment
