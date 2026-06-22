---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card detail/User interface"
domain: "Analysis Model"
element_id: 1609940
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Card number

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card detail/User interface

## 📝 Notes

Number (PAN) of the card

Source: GetCardResponse.card.truncatedPan
{ADD CSI-690}
if user has NOT assigned extended access right UC12_502 then card number is fully masked (only *** is shown instead of truncatedPan)
{/ADD}

Localization code: REL_CardNumber

## 📊 Appears In (1 diagrams)

- Custom: Card detail - User interface
