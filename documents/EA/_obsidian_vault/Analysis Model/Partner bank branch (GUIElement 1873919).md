---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Refunds disbursement channel management/User Interface Model"
domain: "Analysis Model"
element_id: 1873919
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Partner bank branch

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Refunds disbursement channel management/User Interface Model

## 📝 Notes

Listed distinct Salesroom, filtered by:

	
- Salesroom.Partner = selected partner and
	
- Salesroom.Status = Active and
	
- Salesroom -> Address.Region = selected region (if used) and
	
- Salesroom -> Address.District = selected district (if used)

Enabled only if address fields are filled in.

LDM Source:
Contract -> PaymentChannel.Salesroom

Localization code:
PAR_PartnerBranch

Other:
If exactly one salesroom exists for selected Partner, then this field will be prefilled and disabled.

## 🔗 Connections (1)

- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Payment provider for refunds
