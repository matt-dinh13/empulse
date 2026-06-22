---
type: GUIElement
stereotype: "lradio"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product"
domain: "Analysis Model"
element_id: 1820889
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Same as last DDM

> **Type**: GUIElement · **Stereotype**: «lradio»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product

## 📝 Notes

Selection for using the limit amount taken from the application's previous direct debit mandate for automatic setting of the Limit field's value.

Other:

	
- Visible only if any other direct debit mandate exists on the same application.
	
- Enabled only if the Limit field is editable, otherwise disabled.
	
- Selected by default (when visible) for Create DDM scenario (i.e. 01.421 Create application DDM).
	
- Unticked by default for Update DDM scenario (i.e. 01.422 Update application DDM).
	
- Once selected by the user, radio buttons Monthly Installment and Credit amount are automatically unticked and system sets the value of the limit amount taken from the application's previous direct debit mandate (i.e. Contract->DDM.Limit_Amount / GetDDMResponse.ddmData.limit.amount) into the Limit field.


Localization code:
DD_SameAsLastDDM

## 🔗 Connections (1)

- ← Generalization: [[Same as last DDM]]

## 📊 Appears In (1 diagrams)

- Custom: Direct debiting information - Product
