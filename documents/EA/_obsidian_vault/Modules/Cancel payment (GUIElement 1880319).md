---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface"
domain: "Modules"
element_id: 1880319
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Cancel payment

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface

## 📝 Notes

It runs 05.040 Cancel incoming payment manually use case
Disabled 

	
- if Incoming Payment status is "cancelled".
	
- if Refund Item exists in all statuses except 'CANCELLED'
	
- {ADD PAYM-6303}{country IN} Contract status = M (Migrated){/ADD}


Localization code: PAY_IncomingPaymentCancel

## 🔗 Connections (1)

- → Dependency: [[05.040 Cancel incoming payment manually (UseCase 1877236)]]

## 📊 Appears In (1 diagrams)

- Custom: Show incoming payment detail panel
