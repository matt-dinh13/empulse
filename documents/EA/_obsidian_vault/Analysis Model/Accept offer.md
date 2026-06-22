---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail"
domain: "Analysis Model"
element_id: 1755496
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Accept offer

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail

## 📝 Notes

Displayed only for Alternative(optional) offer.
This button accepts the optional offer whose detail is displayed. The logic is described in invoked 01.158 Accept offer.

Disabled after the alternative offer was adjusted (after the execution of UC 01.156 Adjust credit limit) and not saved yet, i.e. if the button Save adjusted offer is active.

Localization code: PRD_AcceptOffer

## 🔗 Connections (3)

- → Dependency: [[{DEL} 01.026 Continue in contract creation]]
- → Realisation: [[01.158 Accept offer (UseCase 1827719)]]
- → Association: [[Decide who will fill in the second block of data]]

## 📊 Appears In (1 diagrams)

- Custom: Offer detail - Panel of buttons
