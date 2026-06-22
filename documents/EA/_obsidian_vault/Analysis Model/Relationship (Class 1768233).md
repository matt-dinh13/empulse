---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23"
domain: "Analysis Model"
element_id: 1768233
diagrams: 2
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Relationship

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationManagementWS/{DEL}ApplicationManagementWS_v23

## 📝 Notes

Represents relationship between party and application based on values from:

	
- Contract->Relationship->* or
	
- Contract->Sales_Agent_phone

## 🔗 Connections (3)

- ← Dependency: [[Relationships]]
- → Dependency: [[RelationshipAttributes]]
- → Dependency: [[Party (Class 1768266)]]

## 📊 Appears In (2 diagrams)

- Logical: ApplicationManagementWS_v23 - UpdateApprovedApplication
- Logical: Get Application - data

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| party | Party |  |
| attributes | RelationshipAttributes |  |
