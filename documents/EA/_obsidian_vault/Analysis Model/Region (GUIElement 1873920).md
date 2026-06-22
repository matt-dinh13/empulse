---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Refunds disbursement channel management/User Interface Model"
domain: "Analysis Model"
element_id: 1873920
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Region

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Refunds disbursement channel management/User Interface Model

## 📝 Notes

Listed distinct Salesroom->Address.Region, filtered by:

	
- Salesroom.Partner = selected partner and


	
- Salesroom.Status = Active

Enabled only if field Partner is filled in.

Localization code:
ADR_Region

Other:
If exactly one salesroom exists for selected Partner, then this field will be prefilled and disabled.
Only for filtering of salesrooms - not saved

## 🔗 Connections (1)

- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Payment provider for refunds
