---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/User Interface Model"
domain: "Analysis Model"
element_id: 1873911
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Partner bank branch

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/User Interface Model

## 📝 Notes

Name of the partner's bank branch.

Other:

	
- Enabled only if Partner is not empty.
	
- Enumeration values are taken from the Partner[selected via Partner]->Salesroom.Name (ordered by .Name ASC).
	
- If there is only one bank branch available for the selected partner, then its value is automatically pre-selected and the field is disabled.


LDM:

	
- //LDM source for field pre-filling
Salesroom[.Code=salesroomCode].Name

- where salesroomCode is taken from GetPaymentChannelResponse.paymentChannels[.purpose='DI'].salesroomCode //Applicable when used within the application form / when the superior modal window is opened from the Application detail screen
or
- where salesroomCode is taken from [*parent]->TempAppl_Payment_Channel/Payment_Channel[.Purpose='DI'].Salesroom_Code
	
- //LDM for value saving
Code of the selected salesroom (i.e. Salesroom.Code) is saved into:
   - CreatePaymentChannelDraftRequest[.purpose='DI'].salesroomCode / UpdatePaymentChannelOrDraftRequest[.purpose='DI'].salesroomCode //Applicable when used within the application form / when the superior modal window is opened from the Application detail screen
   or
   - [*parent]->TempAppl_Payment_Channel/Payment_Channel[.Purpose='DI'].Salesroom_Code


Localization code:
PAR_PartnerBranch

## 🔗 Connections (3)

- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Payment provider (Action 1716225)]]
- → Dependency: [[Salesroom (Class 1556394)]]

## 📊 Appears In (1 diagrams)

- Custom: Payment provider - change disb. channel
