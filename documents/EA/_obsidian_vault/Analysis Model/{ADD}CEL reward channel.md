---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Payment channels"
domain: "Analysis Model"
element_id: 1879158
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {ADD}CEL reward channel

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Payment channels

## 📝 Notes

{ADD PAYM-563}
Localization code: CON_CELRewardChannel

Displayed only if for the contract exists:
- Contract->Contract_Service where Status = ACTIVE and Contract_Service->Service has type = CELREW and Contract_Service->Contract_Service_Parameter[type = CELREW_METHOD].Value in (DEBIT_CARD, GENERAL_BANK_ACCOUNT).{/ADD}
- or Contract->Offer_Financial_Parameter->Offer_Service.Type = CELREW and Offer_Service->Offer_Service_Parameter[.Type = CELREW_METHOD].Value in (DEBIT_CARD, GENERAL_BANK_ACCOUNT).

## 📊 Appears In (1 diagrams)

- Custom: Tab-Payment channels
