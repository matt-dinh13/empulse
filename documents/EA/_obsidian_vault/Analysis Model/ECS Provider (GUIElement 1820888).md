---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product"
domain: "Analysis Model"
element_id: 1820888
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ ECS Provider

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates/Create/Update DDM (modal window)/Product

## 📝 Notes

ECS provider used for clearing of the direct debit mandate's regular payments.

Not editable - read only.

LDM:

	
- //LDM source for field pre-filling
Contract->DDM.ECS_Provider->ECS_Provider.Name
or
ECS_Provider[.Code=GetDDMResponse.ddmData.providerData[.providerType is not null and .providerType != 'DD'].providerCode].Name
	
- //LDM for value saving
Code of the selected ECS provider (i.e. ECS_Provider.Code) is saved into:
   - Contract->DDM.ECS_Provider
   or
   - CreateDDMDraftRequest.ecsProviderCode / 
   - UpdateDDMOrDraftRequest.ecsProviderCode


Localization code:

	
- DD_ECSprovider

## 🔗 Connections (1)

- ← Generalization: [[ECS Partner_DD provider]]

## 📊 Appears In (1 diagrams)

- Custom: Direct debiting information - Product
