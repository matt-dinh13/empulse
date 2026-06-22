---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Presented Interest Rate"
domain: "Analysis Model"
element_id: 1584582
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Presented interest rate in detail

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Presented Interest Rate

## 📝 Notes

Abstract container (not visibly distinguishable on the screen) logically grouping the elements related to the Presented Interest Rates (PIR) applicable for the respective application/contract.

Individual Presented Interest Rates are retrieved according to the rule List of Presented IR (with respective Target on the input) and displayed as follows:

	
- In case only one record is returned on the rule's output, then its percentage value is displayed only as a value of the Presented Interest Rate label (and the Presented Interest Rate grid is hidden).
	
- In case more than one record is returned on the rule's output, then they are all displayed within the Presented Interest Rate grid.


Localization code: none

## 🔗 Connections (1)

- → Dependency: [[List of Presented IR]]

## 📊 Appears In (1 diagrams)

- Custom: Presented Interest Rate
