---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Contact Information/User Interface"
domain: "Analysis Model"
element_id: 1399209
diagrams: 1
connections: 6
tags:
  - object
  - analysis-model
---

# 🔸 Contact Information 

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Contact Information/User Interface

## 📝 Notes

Contact information 

	
- SalesroomContact.* (for Salesrooms)
	
- PartnerContact.* (for Partners)


Default order by: Type asc, Information asc

Localization code: GEN_Phone

## 🔗 Connections (4)

- → Dependency: [[09.330 Show contact information]]
- → Dependency: [[09.170 Remove contact information]]
- → Dependency: [[Contact Type (Class 1647754)]]
- → Dependency: [[09.160 Update contact information]]

## 📊 Appears In (1 diagrams)

- Custom: Contact Information Tab

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Type | string |  |
| Extension  | int |  |
| Phone Number | int |  |
| Contact Person | Partner Contact Person/Salesroom Contact Person |  |
| Email | int |  |
| Notice | string |  |
| URL | string |  |
| Remove contact information | button |  |
| Update contact information | button |  |
| Detail of contact information | button |  |
