---
type: Class
stereotype: ""
package: ""
domain: "_Uncategorized"
element_id: 1869565
diagrams: 0
connections: 1
tags:
  - class
  - _uncategorized
---

# 🔷 getCommunicationTypes

> **Type**: Class
> **Package**: N/A

## 📝 Notes

Response Body Attributes:

	
- content (array<object>)

Array containing a list of communication channel objects. Each object represents one channel record.
• code (string) – Unique code identifier of the communication channel (e.g. ITWTR)
• name (string) – Display name or label of the communication channel (e.g. Incoming Twitter)
• contact_type (string) – Type of contact method used for the channel (e.g. EMAIL, PHONE, ADDRESS)
• direction_type (string) – Direction of communication — IN for inbound or OUT for outbound
• purpose_type (string) – Purpose of communication — CLIENT or NON_CLIENT
• active (string) – Indicates whether the channel is active (Y / N)
 

	
- count (integer)

Number of items returned in the content array.
 

	
- timestamp (string, date-time)

timestamp indicating when the response was generated (e.g. 2025-10-13T12:00:00Z).

## 🔗 Connections (1)

- → Generalization: [[CommunicationCodeListResponse]]

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| contactType | string |  |
| directionType | string |  |
| purposeType | string |  |
| active | boolean |  |
