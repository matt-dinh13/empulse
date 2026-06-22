---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change repayment channel (modal window)"
domain: "Analysis Model"
element_id: 1747610
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Repayment channel

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change repayment channel (modal window)

## 📝 Notes

Type (name) of the repayment method (i.e. type of the repayment payment channel).

Enumeration values are taken from the Payment Channel Type (ordered by .Name ASC) and filtered according to the rule Get allowed repayment methods for application.

LDM:

	
- //LDM source for field pre-filling
GetPaymentChannelResponse.paymentChannels[.purpose='RE'].type .
	
- //LDM for value saving
UpdatePaymentChannelOrDraftRequest[.purpose='RE'].type 


Localization code:
CON_RepaymentChannel

## 🔗 Connections (4)

- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Get allowed repayment methods for application]]
- → Dependency: [[Repayment method editability IN]]
- → Dependency: [[Payment Channel Type]]

## 📊 Appears In (1 diagrams)

- Custom: Change repayment channel
