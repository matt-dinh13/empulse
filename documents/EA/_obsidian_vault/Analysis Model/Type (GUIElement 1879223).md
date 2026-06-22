---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Payment channels"
domain: "Analysis Model"
element_id: 1879223
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Type

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Payment channels

## 📝 Notes

{ADD PAYM-563 /}
LDM:
- Contract->Contract_Service->Contract_Service_Parameter[.Type = CELREW_METHOD].Value where Status = ACTIVE and Contract_Service->Service.Type = CELREW
- or Contract->Offer_Financial_Parameter->Offer_Service->Service_.Type = CELREW and Offer_Service->Offer_Service_Parameter[.Type = CELREW_METHOD].Value

Localization code: CON_CELRewardChannelType

Localization codes for values:
DEBIT_CARD: CON_CELRewardChannelTypeDC
GENERAL_BANK_ACCOUNT: CON_CELRewardChannelTypeBA

## 📊 Appears In (1 diagrams)

- Custom: Tab-Payment channels
