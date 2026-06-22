---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Payment channels"
domain: "Analysis Model"
element_id: 1879221
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {ADD}Beneficiary address

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Payment channels

## 📝 Notes

{ADD PAYM-5205}
Panel displayed only if field Target type = BENEFICIARY_PERSON or BENEFICIARY_COMPANY
If applicant ID is null -> all labels in the panel are empty

{ADD PAYM-5919}
Masking of data is driven by access right UC01_210_PaymentChannelData and {ADD}Payment channel masking - VN 

LDM source:

	
- contract -> applicant -> relatedPersonInfos -> postalAddresses(classification=CONTACT).*
	
- related person is type = OTHER and custom value beneficiaryPersonYn=true

## 📊 Appears In (1 diagrams)

- Custom: Tab-Payment channels
