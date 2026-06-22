---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9159 - MFI_Validations for Monthly household income field"
domain: "Requirements Model"
element_id: 1739999
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9159 - MFI_Validations for Monthly household income field

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9159 - MFI_Validations for Monthly household income field

## 📝 Notes

Why:
To prevent sales agents from entering a monthly household income lower than (or equal to) 25 000 INR onto the application form, so the MFI regulations for a minimal income of potential applicants for a loan are met that way.

What:

	
- Add a new validation for a Monthly Household Income field on all IN application forms (where the field is present), that the value must be greater than 25 000.
- Such validation to be applied only if the parameter (parameters.properties) evaluateHouseholdIncome = TRUE.

## 🔗 Connections (1)

- ← Realisation: [[LOR-9182 - Add validation for Monthly household income field]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9159 - MFI_Validations for Monthly household income field
