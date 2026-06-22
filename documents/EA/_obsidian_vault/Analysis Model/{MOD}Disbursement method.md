---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Way of disbursement - product AF"
domain: "Analysis Model"
element_id: 1820456
diagrams: 2
connections: 6
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Disbursement method

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Payment information - product AF/Way of disbursement - product AF

## 📝 Notes

Type (name) of the disbursement method (i.e. type of the disbursement payment channel).

Other:

	
- Enumeration values are taken from the Payment Channel Type (ordered by .Name ASC) and filtered according to the rule Get allowed disbursement methods for application.
	
- If there is only one allowed disbursement method for the application, then its value is automatically pre-selected.
	
- If there is more than one allowed disbursement method for the application, then the default value can be possibly defined by the application-form-specific parameter defaultPaymentChannel. Otherwise empty by default (when no value is available on the respective payment channel yet).
	
- {ADD LOR-9916} If AF is CLX, the value is prefilled from calculator{/ADD}


LDM:

	
- //LDM source for field pre-filling
GetPaymentChannelResponse.paymentChannels[.purpose='DI'].type
or
Temporary_Application->TempAppl_Payment_Channel[.Purpose='DI'].Type
	
- //LDM for value saving
CreatePaymentChannelDraftRequest[.purpose='DI'].type / 
UpdatePaymentChannelOrDraftRequest[.purpose='DI'].type
or
Temporary_Application->TempAppl_Payment_Channel[.Purpose='DI'].Type


Localization code:
CON_DisbursementMethod

## 🔗 Connections (6)

- ← Generalization: [[Disbursement method]]
- ← Generalization: [[Disbursement method (GUIElement 1311734)]]
- ← Generalization: [[Disbursement method (GUIElement 1311743)]]
- ← Generalization: [[Disbursement method (GUIElement 1781165)]]
- → Dependency: [[Get allowed disbursement methods for application]]
- → Dependency: [[Way of disbursement]]

## 📊 Appears In (2 diagrams)

- Custom: Change disbursement - product AF
- Custom: Way of disbursement - product AF
