---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API"
domain: "Requirements Model"
element_id: 1820762
diagrams: 3
connections: 6
tags:
  - guielement
  - requirements-model
---

# 🖥️ Regular payment

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API

## 📝 Notes

Type (name) of the direct debit mandate's regular payments.

Other:

	
- Enumeration values are taken from the Regular Payment Type.
	
- Displayed if the Temporary_Application.Contract_Type = 'REL'.


LDM:

	
- //LDM source for field pre-filling
GetDDMResponse.ddmData.regularPaymentData.regularPaymentTypeCode //Applicable when the parameter (parameter.properties) useDDMRest = TRUE.
or
Temporary_Application->TempAppl_Payment_Channel[.Purpose='RE'].DDM_Regular_Payment //Applicable when the parameter (parameter.properties) useDDMRest = FALSE.
	
- //LDM for value saving
CreateDDMDraftRequest.regularPaymentData.regularPaymentTypeCode / 
UpdateDDMOrDraftRequest.regularPaymentData.regularPaymentTypeCode //Applicable when the parameter (parameter.properties) useDDMRest = TRUE.
or
Temporary_Application->TempAppl_Payment_Channel[.Purpose='RE'].DDM_Regular_Payment //Applicable when the parameter (parameter.properties) useDDMRest = FALSE.



Localization code:
APP_DDMRegularPayment

## 🔗 Connections (6)

- ← Generalization: [[Regular payment (GUIElement 1685977)]]
- ← Generalization: [[Regular payment (GUIElement 1686021)]]
- ← Generalization: [[Regular payment (GUIElement 1820753)]]
- → Dependency: [[Regular payment type (Class 1822522)]]
- → Dependency: [[Regular payment (Action 1787174)]]
- ← Dependency: [[{ADD}Selecting source of DDM]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- Custom: LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API
- Custom: Way of repayment - product AF
