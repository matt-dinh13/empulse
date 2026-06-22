---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21"
domain: "Analysis Model"
element_id: 1820067
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Relationship

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/ApplicationManagementWS_v21

## 📝 Notes

Represents relationship between party and application based on values from:

	
- Contract->Relationship->* or
	
- Contract->Sales_Agent_phone

## 🔗 Connections (3)

- → Dependency: [[Party (Class 1820069)]]
- ← Dependency: [[Relationships (Class 1820108)]]
- → Dependency: [[RelationshipAttributes (Class 1820121)]]

## 📊 Appears In (2 diagrams)

- Logical: ApplicationManagementWS_v21 - UpdateApprovedApplication
- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| party | Party |  |
| attributes | RelationshipAttributes |  |
