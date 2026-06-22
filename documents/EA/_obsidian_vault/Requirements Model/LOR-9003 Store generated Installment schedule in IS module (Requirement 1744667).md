---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8844 Provide annuity of CEL before signing"
domain: "Requirements Model"
element_id: 1744667
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9003 Store generated Installment schedule in IS module

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8844 Provide annuity of CEL before signing

## 📝 Notes

Proposed solution:

	
- store generated Installment schedule in IS module via API
	
- store reference of Installment schedule to offer (creation of new structure for storage such information)
	
- use existing switch for storage of Installment schedule - generateInstallmentScheduleExternally
	
- storage of offer_installment_schedule and ofp_installment_part won't be changed

Note: only IS for CEL/SAI products will be stored in new module

## 🔗 Connections (1)

- → Realisation: [[LOR-8844 Provide annuity of CEL before signing]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8844 Provide annuity of CEL before signing
- Custom: LOR-9003 Store generated Installment schedule in IS module
