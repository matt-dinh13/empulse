---
type: Requirement
stereotype: "FunctionalRequirement"
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12864/CLM-3713 - Registration queue - Consume and process RelatedSubjectNotification in COMA"
domain: "Modules"
element_id: 1800789
diagrams: 1
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Implement processing RelatedSubjectNotification

> **Type**: Requirement · **Stereotype**: «FunctionalRequirement»
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-12864/CLM-3713 - Registration queue - Consume and process RelatedSubjectNotification in COMA

## 📝 Notes

Goal of this task is to update TCK data in Registration queue based on Kafka TCK RelatedSubjectNotification. Existing bulk update based on certain events on Registration queue will be disabled.

Steps COMA:

	
- System checks if there is contract in  Registration queue for RelatedSubjectNotification[where .subjectType.code = 'CONTRACT]'.code.
	
- If yes then system checks if there is any RelatedSubjectNotification -> Ticket[.activeStatus = True and .category = global parameter DocumentMistakeTicketTypeCode.value and .department = global parameter FrontOfficeAccessRoleCode.value].
	
- If yes then system updates in Registration queue Contract.Mistake Ticket Exists = 1 else .Mistake Ticket Exists = 0.

## 📊 Appears In (1 diagrams)

- Custom: CBL-12864 (CLM-3713) Registration queue - Consume and process RelatedSubjectNotification in COMA
