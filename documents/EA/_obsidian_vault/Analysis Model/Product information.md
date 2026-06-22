---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)"
domain: "Analysis Model"
element_id: 1813833
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Product information

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Application detail header (panel)

## 📝 Notes

Applicable type of the loan and code of the selected product variant.
Note: Code of the selected product variant is placed in the parenthesis, e.g. 'Consumer loan (CD01-01)'.

Shown value is also an active link to the Product detail screen.

LDM source:

	
- Business translation (localized value) for the applicable type of the loan selected according to the rule Business type of loan //For type of the loan part.
	
- Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Product_Variant.Code //For product variant code part.


Localization code:
PRD_Information

## 🔗 Connections (1)

- → Dependency: [[{MOD}Business type of loan]]

## 📊 Appears In (1 diagrams)

- Custom: Application detail header
