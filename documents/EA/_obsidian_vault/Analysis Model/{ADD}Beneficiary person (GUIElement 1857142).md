---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels"
domain: "Analysis Model"
element_id: 1857142
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {ADD}Beneficiary person

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels

## 📝 Notes

{ADD LOR-9881}
Panel displayed only if field Target type = BENEFICIARY_PERSON or BENEFICIARY_COMPANY
If applicant ID is null -> all labels in the panel are empty

{ADD LOR-10854}
Masking of data is driven by access right UC01_210_PaymentChannelData and {ADD}Payment channel masking - VN 

LDM source:

	
- applicant -> relatedPersonInfos
	
- related person is type = OTHER and custom value beneficiaryPersonYn=true

## 📊 Appears In (1 diagrams)

- Custom: Tab - Payment channels
