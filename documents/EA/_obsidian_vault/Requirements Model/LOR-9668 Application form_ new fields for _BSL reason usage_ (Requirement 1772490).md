---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9524 Additional Field on BSL: "Reason for using BSL""
domain: "Requirements Model"
element_id: 1772490
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9668 Application form: new fields for "BSL reason usage"

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9524 Additional Field on BSL: "Reason for using BSL"

## 📝 Notes

new panel in AF

visible in 2BoD (only in CD and CD2)

fields:

	
- Reason for using BSL - will use new code list from CSD (sync codelist from CSD - BSL_USAGE_REASON )
	
- Reason description - beware that users would be able to enter any value (like "..."), consider its relevance and if someone would really go through all entered description 
	
- store data as extended properties (LOR-9667) - BSL_USAGE_REASON_CODE (Reason for using BSL), BSL_USAGE_REASON_DESCRIPTION (Reason description)

## 🔗 Connections (1)

- → Realisation: [[LOR-9524 Additional Field on BSL_ _Reason for using BSL_]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9524 Additional Field on BSL: "Reason for using BSL"
- Custom: LOR-9668 Application form: new fields for "BSL reason usage"
