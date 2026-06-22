---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons"
domain: "Analysis Model"
element_id: 1848489
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ {ADD}Create new debit card

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons

## 📝 Notes

{ADD CLM-2615 /}
The button runs UC 01.010 Choose product offer with following conditions:

	
- Debit card as the only available product type choice

The user is redirected to the Choose product offer screen

The button is only available if:

	
- NewDebitCard4PosContract system property is set to TRUE


	
- the user is in role where the UC privilege is granted


	
- the user's current salesroom has debit card products assigned based on Selection of Product Type for product calculation rule.
	
- the Contract.Status = SIGNED (N) AND Contract Type = CEL AND Contract -> Financial Prameters.Initial Transaction = POS


The button position: under the Add to package button

Localization code:
CON_CreateNewDebitCard

## 🔗 Connections (2)

- → Dependency: [[Selection of Product Type for product calculation]]
- → Dependency: [[01.010 Choose product offer (UseCase 1827711)]]

## 📊 Appears In (1 diagrams)

- Custom: Panel of buttons
