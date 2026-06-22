---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Show contract refunds"
domain: "Analysis Model"
element_id: 1842771
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {ADD}Verification status

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund management/User Interface Model/Show contract refunds

## 📝 Notes

{ADD PAYM-5158}
Displayed only when feature flag "Use refund verification" is true, else this label is invisible

LDM source: 
Contract->Refund disbursement channel change request->Verification status  
If no change request is found, this value should be empty.

Localization code:
PAY_RefundVerificationStatus

## 📊 Appears In (1 diagrams)

- Custom: Show contract refunds
