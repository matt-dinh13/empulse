---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface"
domain: "Modules"
element_id: 1880318
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Decouple payment

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface

## 📝 Notes

It runs 05.060 Decouple incoming payment manually use case
Disabled

	
- if Incoming Payment status is "cancelled" or pairing status is "unpaired".
	
- if Refund Item exists in all statuses except 'CANCELLED'
	
- {ADD PAYM-6303}{country IN} Contract status = M (Migrated){/ADD}


Localization code: PAY_Unpair

## 🔗 Connections (1)

- → Dependency: [[{MOD}05.060 Decouple incoming payment manually]]

## 📊 Appears In (1 diagrams)

- Custom: Show incoming payment detail panel
