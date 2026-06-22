---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types"
domain: "Analysis Model"
element_id: 1768260
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ExtendedProperty

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23/Types

## 📝 Notes

Extended property of the application.

LDM for object's attributes:

	
- .key = Contract->Extended_Property_Value->Extended_Property_Item.Code
	
- .value = Contract->Extended_Property_Value.Value

## 🔗 Connections (3)

- ← Dependency: [[ExtendedProperties]]
- → Generalization «XSDextension»: [[KeyValueType (Class 1768225)]]
- ← Dependency: [[{MOD}ApplicationDetail]]

## 📊 Appears In (3 diagrams)

- Logical: Application
- Logical: ApplicationManagementWS_v23 - UpdateApprovedApplication
- Logical: Get Application - data
