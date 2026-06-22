---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface"
domain: "Modules"
element_id: 1880312
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Manage overpayment

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface

## 📝 Notes

{ADD PAYM-5639}
PH only
Button triggers  use case Manage overpayment.
Displayed only for users with application role which has assigned privilege "05.551 Manage overpayment" in INCPAY.

Available only if all criteria are fulfilled:

	
- Payment status is "active"
	
- Pairing status is "paired"
	
- Payment is paired to installment type "overpayment" (system call API for get overpayment amount for current contract and incoming payment (/openapi/v1.0/installmentSchedule/overpaymentAmount?contractCode={contractCode}&dataExchangeId={dataExchangeId}&sourceSystem={sourceSystem}) - if result amount > 0, then payment is paired to overpayment)
	
- Payment type is NOT in (Reward, Compensation, Gift payment,{ADD IS-2617} Interest back{/ADD})


{/ADD}

## 🔗 Connections (1)

- → Dependency: [[05.551 Manage overpayment (UseCase 1877223)]]

## 📊 Appears In (1 diagrams)

- Custom: Show incoming payment detail panel
