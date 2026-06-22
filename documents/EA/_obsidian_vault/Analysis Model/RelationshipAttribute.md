---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768193
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 RelationshipAttribute

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 📝 Notes

List of external identification attributes

LDM for the attributes:

	
- *.key = Contract->Relationship->Relationship_attribute.Type
	
- *.value = Contract->Relationship->Relationship_attribute.Value

or if Contract->Sales_agent_phone <> null

	
- *.key = 'PHONE_NUMBER'
	
- *.value = Contract->Sales_agent_phone

## 🔗 Connections (2)

- ← Dependency: [[RelationshipAttributes]]
- → Generalization «XSDextension»: [[KeyValueType (Class 1768225)]]

## 📊 Appears In (2 diagrams)

- Logical: ApplicationManagementWS_v23 - UpdateApprovedApplication
- Logical: Get Application - data
