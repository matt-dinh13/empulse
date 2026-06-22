---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/User Interface Model"
domain: "Analysis Model"
element_id: 1873902
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Verify account

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/User Interface Model

## 📝 Notes

{ADD PAYM-1214 CBL-1767 /}
Calls use case 01.676 Verify bank account data for contract disb. channel, passed is  Bank Code[from Bank selected in field Bank Name] and Account number from Edit bank account panel.

Disabled if  Bank name or Account number on Edit bank account panel is empty. 

Localization code:
GEN_VerifyAccount

## 🔗 Connections (1)

- → Realisation: [[{MOD PAYM-6304} 01.676 Verify bank account data for contract disb. channel]]

## 📊 Appears In (1 diagrams)

- Custom: General bank account - change disb. channel
