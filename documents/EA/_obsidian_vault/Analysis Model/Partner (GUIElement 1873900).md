---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/User Interface Model"
domain: "Analysis Model"
element_id: 1873900
diagrams: 1
connections: 5
tags:
  - guielement
  - analysis-model
---

# 🖥️ Partner

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/User Interface Model

## 📝 Notes

Name of the partner (payment provider).

Other:

	
- Enumeration values are taken from the Partner.Name (ordered by .Name ASC) filtered according to the following logic:

1. System retrieves disbursement channels available for the application's salesroom according to the rule Get available disbursement channels for salesroom with following parameters on the input:
   - SalesroomCode = code of the salesroom got according to the rule Get salesroom by operation with respective Contract and Operation = 'APPLICATION_CREATED' on the input
   - ProductType = Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Product_Variant->Product->Product_Profile.Product_Type
   - InitialTransactionType = Contract->Offer_Financial_Parameters[.Chosen=TRUE]->Product_Variant->Product->Product_Profile.Initial_Transaction_Type
Particular disbursement payment channel types available for the respective salesroom are defined by individual DisbursementChannel[Disbursement_Channel] values returned on the rule's output.
2. System takes each DisbursementChannel retrieved within the previous sub-step, filters out those which are not of a Payment provider bank account type and finds the related payment providers for each remaining one of them system calls the respective REST API provided by the HomeSIS module (i.e. GET https://homesis.{environment}/homesis/restful/partners/{paymentProviderCodes}).
.
	
- If there is only one partner available for the respective salesroom, then its value is automatically pre-selected and the field is disabled.


LDM:

	
- //LDM source for field pre-filling
Salesroom[.Code=salesroomCode]->Partner.Name / //When the parameter (parameter.properties) useHomeSisREST = FALSE.
Partner.name retrieved according to the rule Get partner data for selected salesroom with salesroomCode on the input //When the parameter (parameter.properties) useHomeSisREST = TRUE.

- where salesroomCode is taken from GetPaymentChannelResponse.paymentChannels[.purpose='DI'].salesroomCode //Applicable when used within the application form / when the superior modal window is opened from the Application detail screen
or
- where salesroomCode is taken from [*parent]->TempAppl_Payment_Channel/Payment_Channel[.Purpose='DI'].Salesroom_Code


	
- //LDM for value saving
Note: Selected value is not saved; it is used as a filtering input for other form fields only.


Localization code:
PAR_Partner

## 🔗 Connections (5)

- → Dependency: [[Get available disbursement channels for salesroom]]
- → Dependency: [[Get partner data for selected salesroom]]
- → Dependency: [[{MOD}Partner]]
- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[Get salesroom by operation]]

## 📊 Appears In (1 diagrams)

- Custom: Payment provider - change disb. channel
