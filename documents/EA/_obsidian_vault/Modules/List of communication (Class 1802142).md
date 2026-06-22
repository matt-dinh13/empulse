---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/User Interface/List of communication"
domain: "Modules"
element_id: 1802142
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 List of communication

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/User Interface/List of communication

## 📝 Notes

Default order by: Created when desc, COMMUNICATION_RECORD.ID desc
Paging yes
Column visibility is country specific.  Columns mentioned in the hiddenColumnsOnClientCommunicationEventsPanel system property are hidden. Setting hidden columns in the property by country:

	
- ID: Communication note, {ADD CLM-1710}ID{/ADD}
	
- IN: Communication note, Subtype specification, Subtype Subspecification, {ADD CLM-1710}ID{/ADD}
	
- KZ: Subtype specification, Subtype Subspecification, {ADD CLM-1710}ID{/ADD}
	
- PH: Subtype specification, Subtype Subspecification
	
- VN: Communication  status, Communication  result, Communication result detail, Subtype specification, Subtype Subspecification, {ADD CLM-1710}ID{/ADD}


LDM source: Communication_Record

## 📊 Appears In (1 diagrams)

- Custom: List of communication

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Closed tickets |  |  |
| Contact used |  |  |
| Created by | User Name |  |
| Created when |  |  |
| Channel | Communication Channel |  |
| Note | Text |  |
| Result | Communication Result Value |  |
| Result Detail | Result Detail |  |
| Status | Communication Status |  |
| Subtype | Communication Subtype |  |
| System |  |  |
| Type | Communication Type |  |
| Subtype specification |  |  |
| Subtype subspecification |  |  |
| ID | int |  |
