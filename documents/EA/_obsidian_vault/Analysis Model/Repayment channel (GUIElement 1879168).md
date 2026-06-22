---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Payment channels"
domain: "Analysis Model"
element_id: 1879168
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Repayment channel

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Payment channels

## 📝 Notes

Localization code: CON_Repayment

For all fields, LDM source is defined as:


	
- for contracts not signed (CONTRACT.STATUS) yet (i.e. contract has not been in status signed in its history):
* = Contract->Offer_Financial_Parameters
The entity with Offer_Financial_Parameters.Chosen = 'Yes' is used.


	
- for contracts already signed (CONTRACT.STATUS) (i.e. contract has been in status signed in its history):
* = Contract->Financial_Parameters


How to find out that contract has been in status 'signed' in its history:
For contracts in statuses:

	
- In pre-process
	
- In process
	
- Rejected
	
- Approved

It is not necessary to look up the contact's history, such contracts have not been in status 'Signed' yet.

For contracts in statuses:

	
- Signed
	
- Active
	
- Returned
	
- Paid off
	
- Written off
	
- Finished

It is not necessary to look up the contact's history, such contracts have already been in status 'Signed'.

For contracts in statuses:

	
- Cancel

It is necessary to look up the contact's history. The decision is based on the previous status:
- In pre-process, In process or Approved - such contracts have not been in status 'Signed' yet.
- Signed or Active - such contracts have already been in status 'Signed'.

## 📊 Appears In (1 diagrams)

- Custom: Tab-Payment channels
