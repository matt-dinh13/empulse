---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820082
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RelationshipAttribute

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 📝 Notes

List of external identification attributes

LDM for the attributes:

	
- *.key = Contract->Relationship->Relationship_attribute.Type
	
- *.value = Contract->Relationship->Relationship_attribute.Value

or if Contract->Sales_agent_phone <> null

	
- *.key = 'PHONE_NUMBER'
	
- *.value = Contract->Sales_agent_phone

## 🔗 Connections (2)

- → Generalization «XSDextension»: [[KeyValueType (Class 1820089)]]
- ← Dependency: [[RelationshipAttributes (Class 1820121)]]

## 📊 Appears In (2 diagrams)

- Logical: ApplicationManagementWS_v21 - UpdateApprovedApplication
- Logical: Get Application - data
