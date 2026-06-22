---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Change ECS provider (modal window)"
domain: "Analysis Model"
element_id: 1817831
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ ECS Provider

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Change ECS provider (modal window)

## 📝 Notes

ECS provider used for clearing of the direct debit mandate's regular payments.

Other:

	
- Empty by default.
	
- Enumeration values are taken from the ECS Provider (ordered by .Name ASC) and filtered as follows:
   - ECS provider type must be identical to the type of the ECS provider, which is currently set on the processed direct debit mandate (i.e. ECS_Provider.ECS_Provider_Type = ECS_Provider[.Code=DirectDebitMandate.providerData[.providerType is not null and .providerType != 'DD'].providerCode].ECS_Provider_Type when the parameter (parameter.properties) useDDMRest = TRUE / Contract->DDM.ECS_Provider->ECS_Provider.ECS_Provider_Type when the parameter (parameter.properties) useDDMRest = FALSE).
   - ECS provider, which is currently set on the processed direct debit mandate (i.e. DirectDebitMandate.providerData[.providerType is not null and .providerType != 'DD'].providerCode when the parameter (parameter.properties) useDDMRest = TRUE / Contract->DDM.ECS_Provider->ECS_Provider.Code when the parameter (parameter.properties) useDDMRest = FALSE), is excluded from the enumeration.


LDM:

	
- Code of the selected ECS provider (i.e. ECS_Provider.Code) is saved into:
   - Contract->DDM.ECS_Provider->ECS_Provider.Code //Applicable when the parameter (parameter.properties) useDDMRest = FALSE.
   or
   - UpdateECSProviderForDDMRequest.ecsProviderCode //Applicable when the parameter (parameter.properties) useDDMRest = TRUE.


Localization code:
DD_ECSprovider

## 🔗 Connections (2)

- → Dependency: [[Mandatory (Action 1789793)]]
- → Dependency: [[ECS Provider (Enumeration 1869709)]]

## 📊 Appears In (1 diagrams)

- Custom: Change ECS provider
