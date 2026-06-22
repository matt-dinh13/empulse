---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface"
domain: "Modules"
element_id: 1880297
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Refund payment

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface

## 📝 Notes

{ADD PAYM-4601}
Triggers use case of refunding of the given incoming payment.

Disabled if one of the following condition is met:
- Refund Item exists in any status except 'CANCELLED'
- Incoming Payment. Status is not A (Active)
- Incoming Payment Type is not PFC (Payment from client)
- {ADD PAYM-6303}{country IN} Contract status = M (Migrated){/ADD}

## 🔗 Connections (1)

- → Dependency: [[05.505 Create refund for incoming payment manually (UseCase 1877246)]]

## 📊 Appears In (1 diagrams)

- Custom: Show incoming payment detail panel
