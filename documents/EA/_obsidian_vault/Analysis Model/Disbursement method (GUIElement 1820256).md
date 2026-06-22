---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)"
domain: "Analysis Model"
element_id: 1820256
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Disbursement method

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Payment channels/Change disbursement channel (modal window)

## 📝 Notes

Type (name) of the disbursement method (i.e. type of the disbursement payment channel).

Other:

	
- Enumeration values are taken from the Payment Channel Type (ordered by .Name ASC) and filtered according to the rule Get allowed disbursement methods for application.
	
- If there is only one allowed disbursement method for the contract, then its value is automatically pre-selected. Otherwise empty by default (when no value is available on the respective payment channel yet).
	
- At the moment when user chooses disbursement channel of type 'Partner bank' and system detects that no Partner can be assigned (i.e. no Partner fulfills criteria for Partner selection including existence of at lest one assigned active salesroom), error that no valid Partner bank is defined for salesroom is displayed  (MSG_NoValidPartnerBank).


LDM:

	
- //LDM source for field pre-filling
GetPaymentChannelResponse.paymentChannels[.purpose='DI'].type //Applicable when the superior modal window is opened from the Application detail screen
or
Contract->Payment_Channel[.Purpose='DI'].Type
	
- //LDM for value saving
UpdatePaymentChannelOrDraftRequest.type //Applicable when the superior modal window is opened from the Application detail screen
or
Contract->Payment_Channel[.Purpose='DI'].Type


Localization code:
CON_DisbursementMethod

## 🔗 Connections (4)

- → Dependency: [[Get allowed disbursement methods for application]]
- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Disbursement - Repayment relation IN]]
- → Dependency: [[Payment Channel Type]]

## 📊 Appears In (1 diagrams)

- Custom: Change disbursement channel
