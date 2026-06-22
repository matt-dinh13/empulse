---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)"
domain: "Analysis Model"
element_id: 1820280
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ PAN number

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)

## 📝 Notes

PAN number of the external payment card.

Input field only - never pre-filled.

Other:

	
- Entered value is divided by a space character (' ') into multiple blocks of four characters.
	
- Once the focus leaves this field, system masks all entered characters except the first six and the last four characters - replaces them with the star symbol ('*').

Example:
   - PAN number 1234567890123456 is displayed as '1234 56** **** 3456'.


Localization code:
GEN_PANNumber

## 📊 Appears In (1 diagrams)

- Custom: Card account selection on Application detail
