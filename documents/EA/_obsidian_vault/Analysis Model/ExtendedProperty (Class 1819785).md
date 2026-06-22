---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types"
domain: "Analysis Model"
element_id: 1819785
diagrams: 3
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 ExtendedProperty

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v22/Types

## 📝 Notes

Extended property of the application.

LDM for object's attributes:

	
- .key = Contract->Extended_Property_Value->Extended_Property_Item.Code
	
- .value = Contract->Extended_Property_Value.Value

## 🔗 Connections (3)

- ← Dependency: [[ExtendedProperties (Class 1819810)]]
- ← Dependency: [[ApplicationDetail]]
- → Generalization «XSDextension»: [[KeyValueType (Class 1819772)]]

## 📊 Appears In (3 diagrams)

- Logical: Application
- Logical: ApplicationManagementWS_v22 - UpdateApprovedApplication
- Logical: Get Application - data
