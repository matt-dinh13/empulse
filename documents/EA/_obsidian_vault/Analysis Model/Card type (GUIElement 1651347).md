---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface"
domain: "Analysis Model"
element_id: 1651347
diagrams: 3
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Card type

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card operations/User interface

## 📝 Notes

LDM:
CardType is evaluated according to following rule:
CardService =Contract.ContractCardService.StandardPaymentCardService  
where Contract.Code = input
If CardService.PersonalizedCardType is not null
then CardType = CardService.PersonalizedCardType 
else CardType = CardService.InstantCardType

Localization code: REL_RequiredCardType

## 📊 Appears In (3 diagrams)

- Custom: Card replacement
- Custom: CBL-5285 (CLM-1834) Change Automatic Tick for Replace Card Menu in BSL
- Custom: CBL-8991 (CLM-2970) Setting card replacement screen options
