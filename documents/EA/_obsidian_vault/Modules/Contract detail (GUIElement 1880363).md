---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface"
domain: "Modules"
element_id: 1880363
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Contract detail

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface

## 📝 Notes

{ADD MODULARIZATION}
It opens  contract detail in other system via URL and parameter [contractCode] where
contractCode = IncomingPayment->IncomingPaymentToContract[where Active = true]->Contract.contractCode
{/ADD}

Enabled:
Only if status of incoming payment is “paired”.

Localization code: 
CON_Detail

## 📊 Appears In (1 diagrams)

- Custom: Show incoming payment detail panel
