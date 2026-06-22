---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9118 - MFI_New fields addition"
domain: "Requirements Model"
element_id: 1740900
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9147 - Add field Household expenses to 2BoD application forms

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9118 - MFI_New fields addition

## 📝 Notes

As a sales agent, I need to collect the information about the amount of client's monthly family expenses in case the client's monthly household income is lower than (or equal to) 25 000 INR onto the application form, so the MFI regulations for a minimal income of potential applicants for a loan are met that way.

Solution proposal:

	
- Adjust the Household expenses field on the IN application forms as follows:
- Rename the field's label to Monthly family expenses.
- Add the field to all 2SP GUI application forms (onto 2BoD in particular).
- Display the field only if all the following conditions are met:
   - Household income field is not empty AND it's value is not greater than '25.000,00'.
   - Newly introduced temporary switch displayExpensesOnAF = TRUE.
- Apply the following field-validations:
   - Field is mandatory (when it is displayed).
   - Entered value must be greater than or equal to 0.
	
- Send the Monthly family expenses field's value to PIF along with other applicant data (store it as a custom value) and prefill the respective application form field with the value retrieved from PIF for the existing customers.

## 🔗 Connections (1)

- → Realisation: [[LOR-9118 - MFI_New fields addition]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9118 - MFI_New fields addition
