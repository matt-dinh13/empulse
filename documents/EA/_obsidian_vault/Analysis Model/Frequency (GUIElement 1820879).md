---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product"
domain: "Analysis Model"
element_id: 1820879
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Frequency

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product

## 📝 Notes

Frequency of the direct debit mandate's regular payments.

Other:

	
- Enumeration values are taken from the DDM Frequency Type (ordered by .Name ASC).
	
- If there is only one possible frequency available, then its value is automatically pre-selected and the field is disabled.


LDM:

	
- //LDM source for field pre-filling
Contract->DDM.Frequency_Type->DDM_Frequency_Type.Name
or
Regular_Payment_Type[.Code=GetDDMResponse.ddmData.regularPaymentData.regularPaymentTypeCode].Name


	
- //LDM for value saving
Code of the selected frequency (i.e. DDM_Frequency_Type.Code) is saved into:
   - Contract->DDM.Frequency_Type
   or
   - CreateDDMDraftRequest.ddmFrequency / 
   - UpdateDDMOrDraftRequest.ddmFrequency


Localization code:
GEN_Frequency

## 🔗 Connections (3)

- → Dependency: [[DDM Frequency Type]]
- ← Generalization: [[Frequency (GUIElement 1820871)]]
- ← Generalization: [[Frequency (GUIElement 1820854)]]

## 📊 Appears In (1 diagrams)

- Custom: Direct debiting information - Product
