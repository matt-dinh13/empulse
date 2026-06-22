---
type: Requirement
stereotype: "Business rule"
package: ""
domain: "_Uncategorized"
element_id: 1335468
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 Get allowed debt

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: N/A

## 📝 Notes

Description: 
Rule describing how to get allowed total debt of payment pairing message template.

(Note: e.g. if Contract -> Debt catalogue.Total debt <= allowed total debt then MSG_PAYMENT_PAIRING template will be used.)

Input:
- system event

Output: 
- total debt allowed

Steps: 

	
- Get message body from system event -> Notification Message Definition -> Notification Message Template.Total Debt Allowed where Notification Message Definition.Variant = MSG_PAYMENT_PAIRED and Notification Type = SMS
- if no Notification Message Definition related to system event then log error MSG_NoEventOnNotificationDefinition (e.g. "No Notification Message Definition related to" + ToString(system event)) and returns

Return total debt allowed
