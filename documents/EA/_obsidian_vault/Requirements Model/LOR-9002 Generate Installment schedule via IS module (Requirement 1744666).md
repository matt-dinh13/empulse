---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8844 Provide annuity of CEL before signing"
domain: "Requirements Model"
element_id: 1744666
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9002 Generate Installment schedule via IS module

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8844 Provide annuity of CEL before signing

## 📝 Notes

As a system, I will generate IS via external module (stand alone engine).

Solution proposal:

	
- use offer data for generation of installment schedule via API that is provided by IS module instead of generation of installment schedule via database
	
- create switch for calling IS module - generateInstallmentScheduleExternally

## 🔗 Connections (1)

- → Realisation: [[LOR-8844 Provide annuity of CEL before signing]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8844 Provide annuity of CEL before signing
- Custom: LOR-9002 Generate Installment schedule via IS module
