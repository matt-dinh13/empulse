---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Contact/Logical Data Model"
domain: "Analysis Model"
element_id: 1647754
diagrams: 4
connections: 11
tags:
  - class
  - analysis-model
---

# 🔷 Contact Type

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Contact/Logical Data Model

## 📝 Notes

This enumeration defines contact types. Unique business identification is

	
- Category and
	
- Role

## 🔗 Connections (11)

- ← Dependency: [[Contact Type]]
- ← Dependency: [[Contact Information (Object 1399209)]]
- ← Dependency: [[Type (GUIElement 1399206)]]
- → Dependency: [[EmployerContact]]
- → Dependency «use»: [[Contact Type Category]]
- → Dependency «use»: [[Contact Type Role]]
- → Dependency: [[RelatedPersonContact]]
- → Dependency: [[CustomerContact]]
- ← Association: [[Contact (Class 1647755)]]
- → Dependency «use»: [[Contact Type Description]]
- ← Dependency: [[TempAppl Contact]]

## 📊 Appears In (4 diagrams)

- Logical: Common - Contact
- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization
- Logical: Temporary Application - Person and Employment

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | Code |  |
| Description | Text |  |
| Description type | Contact Type Description |  |
| Category | Contact Type Category |  |
| Role | Type Contact Type Role |  |
| Verification required | Boolean |  |
| Maximum count | integer |  |
| Custom validation | int |  |
