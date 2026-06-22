---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Card management support/Card detail/User interface"
domain: "Analysis Model"
element_id: 1609942
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Block/Unblock

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Card management support/Card detail/User interface

## 📝 Notes

Clicking this button runs use case 12.540 Card blocking overview with input 
PCID= Card identifier from detail 
blocking reasons=result of calling GetCardRequest on card detail (CardDetailDto->NewCardBlockDto.CardBlockTypeId
CardDetailDto->CardBlockDto.createdBy
CardDetailDto->CardBlockDto.blockedFrom) 
were CardBlockDto.blockTill = null

Visibility of the button is described in Block/Unblock Card availability rule.

Localization code:REL_BlockUnblockCard

## 🔗 Connections (1)

- → Dependency: [[12.540 Card blocking overview (UseCase 1849969)]]

## 📊 Appears In (1 diagrams)

- Custom: Card detail - User interface
