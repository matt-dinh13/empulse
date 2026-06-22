---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API"
domain: "Requirements Model"
element_id: 1820758
diagrams: 3
connections: 5
tags:
  - guielement
  - requirements-model
---

# 🖥️ Regular payment amount

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API

## 📝 Notes

Amount of the direct debit mandate's fixed regular payments.

Other:

	
- Visible only if the selected Regular payment is Fixed ('FIXED').


LDM:

	
- //LDM source for field pre-filling
GetDDMResponse.ddmData.regularPaymentData.regularPaymentAmount.amount //Applicable when the parameter (parameter.properties) useDDMRest = TRUE.
or
Temporary_Application->TempAppl_Payment_Channel[.Purpose='RE'].DDM_Regular_Payment_Amount //Applicable when the parameter (parameter.properties) useDDMRest = FALSE.
	
- //LDM for value saving
CreateDDMDraftRequest.regularPaymentData.regularPaymentAmount.amount / 
UpdateDDMOrDraftRequest.regularPaymentData.regularPaymentAmount.amount //Applicable when the parameter (parameter.properties) useDDMRest = TRUE.
or
Temporary_Application->TempAppl_Payment_Channel[.Purpose='RE'].DDM_Regular_Payment_Amount //Applicable when the parameter (parameter.properties) useDDMRest = FALSE.

Localization code:
APP_DDMRegularPaymentAmount

## 🔗 Connections (5)

- ← Generalization: [[Regular payment amount (GUIElement 1685976)]]
- ← Generalization: [[Regular payment amount (GUIElement 1686017)]]
- ← Generalization: [[Regular payment amount (GUIElement 1820746)]]
- → Dependency: [[Regular payment amount (Action 1787161)]]
- ← Dependency: [[{ADD}Selecting source of DDM]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- Custom: LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API
- Custom: Way of repayment - product AF
