---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product"
domain: "Analysis Model"
element_id: 1820881
diagrams: 1
connections: 5
tags:
  - guielement
  - analysis-model
---

# 🖥️ Regular payment type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product

## 📝 Notes

Type of the direct debit mandate's regular payments.

Other:

	
- Enumeration values are taken from the Regular Payment Type.
	
- Visible only if the contract is based on a REL product type (i.e. Contract.Contract_Type = 'REL').


LDM:

	
- //LDM source for field pre-filling
Contract->DDM.Regular_Payment_Type->Regular_Payment_Type.Name
or
Regular_Payment_Type[.Code=GetDDMResponse.ddmData.regularPaymentData.regularPaymentTypeCode].Name


	
- //LDM for value saving
Code of the selected regular payment type (i.e. Regular_Payment_Type.Code) is saved into:
   - Contract->DDM.Regular_Payment_Type
   or
   - CreateDDMDraftRequest.regularPaymentData.regularPaymentTypeCode / 
   - UpdateDDMOrDraftRequest.regularPaymentData.regularPaymentTypeCode


Localization code:
DDM_RegularPaymentType

## 🔗 Connections (5)

- → Dependency: [[Regular payment type (Class 1822522)]]
- → Dependency: [[DDM regular payment type]]
- ← Generalization: [[Regular payment type (GUIElement 1820867)]]
- ← Generalization: [[Regular payment type (GUIElement 1820862)]]
- ← Dependency: [[{ADD}Selecting source of DDM]]

## 📊 Appears In (1 diagrams)

- Custom: Direct debiting information - Product
