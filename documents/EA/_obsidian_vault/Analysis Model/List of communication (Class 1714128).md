---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/User Interface Model"
domain: "Analysis Model"
element_id: 1714128
diagrams: 3
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 List of communication

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/User Interface Model

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

## 📊 Appears In (3 diagrams)

- Custom: Installment schedule
- Custom: List of communication
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
| {MOD}Result Detail | Result Detail |  |
| Status | Communication Status |  |
| Subtype | Communication Subtype |  |
| System |  |  |
| Type | Communication Type |  |
| Subtype specification |  |  |
| Subtype subspecification |  |  |
| ID | int |  |
