---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model"
domain: "Analysis Model"
element_id: 1818380
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Other info

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model

## 📝 Notes

Prepare Infotext as follows.
Infotext = empty string

// Validations required for subsequent contract signature (here executed in advance as warning)
System validates each commodity associated with the application according to the rule Validate application commodity with EventType = 'CONTRACT_SIGNATURE' and respective CommodityID on the input.
Each validation message (error or warning) is added as a new line into the Infotext.

If Infotext is not empty string, then system displays Infotext (multi-line message). Otherwise the element is hidden (label inclusive).


Localization code:
CON_OtherInfo

## 📊 Appears In (1 diagrams)

- Custom: Contract signing
