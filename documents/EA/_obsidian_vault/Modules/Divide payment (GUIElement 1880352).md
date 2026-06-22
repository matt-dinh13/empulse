---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface"
domain: "Modules"
element_id: 1880352
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Divide payment

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface

## 📝 Notes

It runs 05.070 Divide incoming payment use case
Disabled:

	
- if Incoming Payment status is "cancelled" or pairing status is "paired".
	
- if Refund Item exists in all statuses except 'CANCELLED'


Localization code: PAY_Divide

## 🔗 Connections (1)

- → Dependency: [[05.070 Divide incoming payment (UseCase 1877221)]]

## 📊 Appears In (1 diagrams)

- Custom: Show incoming payment detail panel
