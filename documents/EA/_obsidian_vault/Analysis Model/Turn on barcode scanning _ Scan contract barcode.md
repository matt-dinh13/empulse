---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract package tracking/User Interface Model"
domain: "Analysis Model"
element_id: 1666708
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Turn on barcode scanning / Scan contract barcode 

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract package tracking/User Interface Model

## 📝 Notes

text field which enables activation of  UC 01.266 Check presence of contract package with barcode reader. Button is visible for user with access right 01.266 Check presence of contract with barcode reader.

Proposed labels for text field:

	
- Deactivated - Label:"Turn on barcode scanning", Color: Red
Localization code: MSG_BARCODE_SCAN_TURNED_OFF_TEXT


	
- Activated(clicked) - Label:"Scan document barcode", Color: Green
Localization code: MSG_BARCODE_SCAN_TURNED_ON_TEXT


Text field is deactivated when user clicks on some other place in 'Contract registration tab'

## 📊 Appears In (1 diagrams)

- Custom: Receive contract package
