---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/User Interface Model"
domain: "Analysis Model"
element_id: 1873923
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Bank account verification

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Disbursements channel management/User Interface Model

## 📝 Notes

Form for a verification of client's bank account.

Whole form is displayed only if Evaluate if verification of bank account for disb. channel is required returns TRUE.

Localization code: none


Rule applicable only for ID environments: 

Initialization:
If Payment Channel.Recipient Bank Account External Verification Result = VERIFIED
the field Account holder name on Edit bank account panel is not editable.
Otherwise (is not VERIFIED, e.g. null), the field is initialized as editable.

Variable Remaining attempts for technical error = value of payment global parameter MaxVerifAttForDisbChannelChangeBA.

Behavior:
Once the system receives a response from 01.676 Verify bank account data for contract disb. channel (i.e. an user clicks on Verify button, validations are fulfilled and the use case successfully calls external verification), according to the response:

	
- VALIDATION_FAILED
--> appropriate validation message is shown 
--> Verify button is disabled
	
- VERIFIED 
--> the field Account holder name on Edit bank account panel is not editable
--> set Payment Channel.Recipient Bank Account External Verification Result = VERIFIED 
--> Verify button is disabled
	
- BANK_NOT_SUPPORTED 
--> the field Account holder name on Edit bank account panel is editable
--> set Payment Channel.Recipient Bank Account External Verification Result = BANK_NOT_SUPPORTED
--> Verify button is disabled
	
- TECHNICAL_ERROR
--> set Remaining attempts for technical error = (Remaining attempts for technical error - 1)
--> if Remaining attempts for technical error = 0, Verify button is disabled and the field Account holder name on Edit bank account panel is editable
--> Verify button is enabled


If an user clicks on Verify button:--> the fields Bank name or Account number on Edit bank account panel are disabled
--> Verify button is disabled

Edition of fields: 
If an user changes Bank name or Account number on Edit bank account panel:
--> the field Account holder name is emptied and is editable
--> Verify button is enabled
--> set Remaining attempts for technical error = value of payment global parameter MaxVerifAttForDisbChannelChangeBA (i.e. reset the value)

## 🔗 Connections (1)

- → Dependency: [[{ADD}Evaluate if verification of bank account for disb. channel is required]]

## 📊 Appears In (1 diagrams)

- Custom: General bank account - change disb. channel
