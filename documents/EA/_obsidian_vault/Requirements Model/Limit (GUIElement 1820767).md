---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API"
domain: "Requirements Model"
element_id: 1820767
diagrams: 3
connections: 3
tags:
  - guielement
  - requirements-model
---

# 🖥️ Limit

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API

## 📝 Notes

Transaction limit of the direct debit mandate.

Other:

	
- When DD_Type of the selected Bank has an ECS code, then this field is displayed and pre-filled with value calculated according to the Algorithm: Calculate DDM limit.


LDM:

	
- //LDM source for field pre-filling
GetDDMResponse.ddmData.limit.amount //Applicable when the parameter (parameter.properties) useDDMRest = TRUE.
or
Temporary_Application->TempAppl_Payment_Channel[.Purpose='RE'].DDM_Limit //Applicable when the parameter (parameter.properties) useDDMRest = FALSE.
	
- //LDM for value saving
CreateDDMDraftRequest.limit.amount / 
UpdateDDMOrDraftRequest.limit.amount //Applicable when the parameter (parameter.properties) useDDMRest = TRUE.
or
Temporary_Application->TempAppl_Payment_Channel[.Purpose='RE'].DDM_Limit //Applicable when the parameter (parameter.properties) useDDMRest = FALSE.

Localization code:
GEN_Limit

## 🔗 Connections (3)

- ← Generalization: [[Limit (GUIElement 1686025)]]
- ← Generalization: [[Limit (GUIElement 1820744)]]
- → Dependency: [[Algorithm_ Calculate DDM limit]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- Custom: LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API
- Custom: Way of repayment - product AF
