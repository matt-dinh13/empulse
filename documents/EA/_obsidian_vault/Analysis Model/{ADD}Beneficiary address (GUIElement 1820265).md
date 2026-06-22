---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)"
domain: "Analysis Model"
element_id: 1820265
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {ADD}Beneficiary address

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)

## 📝 Notes

{ADD LOR-9836/}
Panel displayed only if field Target type = BENEFICIARY_PERSON
or BENEFICIARY_COMPANY

LDM source:

	
- applicant->relatedPersonInfos->postalAddresses(classification=CONTACT).*
	
- related person is type = OTHER and custom value beneficiaryPersonYn=true


Localization codes: APP_BENEFICIARYADDRESS

## 📊 Appears In (1 diagrams)

- Custom: Change disbursement channel
