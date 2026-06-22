---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface"
domain: "Modules"
element_id: 1880330
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Installment schedule

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface

## 📝 Notes

{ADD MODULARIZATION}
It opens installment schedule detail (CEL or REL) in other system via URL and parameters [contractCode, contractType] where
- contractCode = IncomingPayment->IncomingPaymentToContract[where Active = true]->Contract.contractCode
- contractType = IncomingPayment->IncomingPaymentToContract[where Active = true]->Contract.productType
{/ADD}

Enabled:
Only if incoming payment status is “paired”, otherwise is disabled

Localization code: 
INS_InstallmentSchedule

## 📊 Appears In (1 diagrams)

- Custom: Show incoming payment detail panel
