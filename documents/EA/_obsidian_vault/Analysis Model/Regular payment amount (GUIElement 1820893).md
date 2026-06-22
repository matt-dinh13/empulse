---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product"
domain: "Analysis Model"
element_id: 1820893
diagrams: 1
connections: 5
tags:
  - guielement
  - analysis-model
---

# 🖥️ Regular payment amount

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product

## 📝 Notes

Amount of the direct debit mandate's regular payments.

Other:

	
- Visible only if the contract is based on a REL product type (i.e. Contract.Contract_Type = 'REL').
	
- Editable only if the selected Regular payment type is Fixed payment ('FIXED'), otherwise disabled.


LDM:

	
- //LDM source for field pre-filling
Contract->DDM.Regular_Payment_Amount
or
GetDDMResponse.ddmData.regularPaymentData.regularPaymentAmount.amount


	
- //LDM for value saving
Contract->DDM.Regular_Payment_Amount
or
CreateDDMDraftRequest.regularPaymentData.regularPaymentAmount.amount / 
UpdateDDMOrDraftRequest.regularPaymentData.regularPaymentAmount.amount


Localization code:
DDM_RegularPaymentAmount

## 🔗 Connections (5)

- → Dependency: [[DDM regular payment amount]]
- → Dependency: [[Mandatory if editable (Action 1789808)]]
- ← Generalization: [[Regular payment amount (GUIElement 1820875)]]
- ← Generalization: [[Regular payment amount (GUIElement 1820856)]]
- ← Dependency: [[{ADD}Selecting source of DDM]]

## 📊 Appears In (1 diagrams)

- Custom: Direct debiting information - Product
