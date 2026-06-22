---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API"
domain: "Requirements Model"
element_id: 1820761
diagrams: 3
connections: 4
tags:
  - guielement
  - requirements-model
---

# 🖥️ Frequency

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9158 - Separate LOR from PAYM module - Direct debit mandates/LOR-9160 - Save direct debit mandate data from application form via DDM REST API

## 📝 Notes

Frequency (name) of the direct debit mandate's regular payments.

Other:

	
- Enumeration values are taken from the DDM Frequency Type (ordered by .Name ASC).
	
- If there is only one possible frequency available, then its value is automatically pre-selected and the field is hidden.


LDM:

	
- //LDM source for field pre-filling
GetDDMResponse.ddmData.ddmFrequency //Applicable when the parameter (parameter.properties) useDDMRest = TRUE.
or
Temporary_Application->TempAppl_Payment_Channel[.Purpose='RE'].DDM_Frequency //Applicable when the parameter (parameter.properties) useDDMRest = FALSE.
	
- //LDM for value saving
CreateDDMDraftRequest.ddmFrequency / 
UpdateDDMOrDraftRequest.ddmFrequency //Applicable when the parameter (parameter.properties) useDDMRest = TRUE.
or
Temporary_Application->TempAppl_Payment_Channel[.Purpose='RE'].DDM_Frequency //Applicable when the parameter (parameter.properties) useDDMRest = FALSE.



Localization code:
GEN_Frequency

## 🔗 Connections (4)

- ← Generalization: [[Frequency (GUIElement 1685978)]]
- ← Generalization: [[Frequency (GUIElement 1686019)]]
- ← Generalization: [[Frequency (GUIElement 1820749)]]
- → Dependency: [[DDM Frequency Type]]

## 📊 Appears In (3 diagrams)

- Custom: LOR-9160 - Save direct debit mandate data from application form via DDM REST API
- Custom: LOR-9257 - Get direct debit mandate data for application form prefilling via DDM REST API
- Custom: Way of repayment - product AF
