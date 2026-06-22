---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types"
domain: "Analysis Model"
element_id: 1820075
diagrams: 3
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 ExtendedProperty

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21/Types

## 📝 Notes

Extended property of the application.

LDM for object's attributes:

	
- .key = Contract->Extended_Property_Value->Extended_Property_Item.Code
	
- .value = Contract->Extended_Property_Value.Value

## 🔗 Connections (4)

- ← Dependency: [[ExtendedProperties (Class 1820111)]]
- → Generalization «XSDextension»: [[KeyValueType (Class 1820089)]]
- ← Dependency: [[ApprovedApplication (Class 1820085)]]
- ← Dependency: [[ApplicationDetail (Class 1820059)]]

## 📊 Appears In (3 diagrams)

- Logical: Application
- Logical: ApplicationManagementWS_v21 - UpdateApprovedApplication
- Logical: Get Application - data
