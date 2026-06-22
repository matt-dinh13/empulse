---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8844 Provide annuity of CEL before signing"
domain: "Requirements Model"
element_id: 1744669
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9009 Prepare IS data for creation of Installment and Installment Part in sign UC

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-8844 Provide annuity of CEL before signing

## 📝 Notes

As a system, I will get data of installment schedule from ISM module and these data will be used to created standard contract installments.

Proposed solution:

	
- system calls get data from IS module based on IS external identifier and these data are sued for creation of contract->Installment and Installment Part in sign UC
	
- it is run only if new switch createContractIS=TRUE otherwise it is created from old structure (offer_installment and offer_installment_part)

## 🔗 Connections (1)

- → Realisation: [[LOR-8844 Provide annuity of CEL before signing]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8844 Provide annuity of CEL before signing
- Custom: LOR-9009 Prepare IS data for creation of Installment and Installment Part in sign UC
