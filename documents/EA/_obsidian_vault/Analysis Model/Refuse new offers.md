---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail"
domain: "Analysis Model"
element_id: 1755492
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Refuse new offers

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Offer Detail

## 📝 Notes

Displayed only for Alternative(optional) offer.
Displayed only when:

	
- the result of the last performed scoring (minimum of all CONTRACT.SCORING.SCORING_RESULT.CREATION_DATEs) was 'REJECTED'.

AND

	
- the contract is in status/sub-status 'In pre-process'/'Offers generated' OR 'In process'/'Offers generated'


Clicking this button calls use case 01.159 Reject offer.

Localization code: PRD_RefuseNewOffers

## 🔗 Connections (1)

- → Realisation: [[{MOD}01.159 Reject offer]]

## 📊 Appears In (1 diagrams)

- Custom: Offer detail - Panel of buttons
