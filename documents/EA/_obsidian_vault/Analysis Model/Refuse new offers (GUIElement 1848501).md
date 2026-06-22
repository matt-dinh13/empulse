---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons"
domain: "Analysis Model"
element_id: 1848501
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Refuse new offers

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons

## 📝 Notes

Displayed only when:

	
- the result of the last performed scoring (minimum of all CONTRACT.SCORING.SCORING_RESULT.CREATION_DATEs) was 'REJECTED'.

AND

	
- the contract is in status/sub-status 'In pre-process'/'Offers generated' OR 'In process'/'Offers generated'


Clicking this button calls use case 01.159 Reject offer.

Localization code: PRD_RefuseNewOffers

## 🔗 Connections (2)

- → Dependency: [[{MOD}01.159 Reject offer]]
- → Association «navigate»: [[Do you really want to refuse all new offers_]]

## 📊 Appears In (1 diagrams)

- Custom: Panel of buttons
