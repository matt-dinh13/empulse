---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Refunds disbursement channel management/User Interface Model"
domain: "Analysis Model"
element_id: 1241953
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Refund disbursement method

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Refunds disbursement channel management/User Interface Model

## 📝 Notes

Possible listed values (depends on setting in Payment Channel To Product Type):

	
- PBA (Partner bank)
	
- GBA (General bank account)

Other values do not make sense.

1. System gets a distinct of allowed Payment Channel Types for Refund Disbursement purpose from the Payment Channel To Product Type entity (i.e. get distinct Payment Channel Type from Payment Channel To Product Type having Payment Purpose Type = 'DR' and Archived = 0)
2. If also PBA payment channel is returned, 

	
- system checks if an active 'Partner bank' definition in SNM exist (i.e. exist record in Partner having Partner.type = 'PB' and Status = 'Active' and Partner contains at least one active Salesroom)
	
- if no definitions is found, PBA value is removed


Keep in mind, a setting in Payment Channel To Product Type entity for refund disbursement (DR) purpose has to be done!

Localization code:
PAY_RefundDisburesementMethod

## 🔗 Connections (1)

- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Refund disbursement
