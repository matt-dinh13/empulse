---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9582 DDM validation when signing agreement"
domain: "Requirements Model"
element_id: 1764269
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-9582 DDM validation when signing agreement

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9041 - Unified DDM (ADA)/LOR-9582 DDM validation when signing agreement

## 📝 Notes

As a system, I will request not to validate incomplete bank account when validating DDM.

Proposed solution
When enableDDMSourceAndType = true, system:

	
- sends query parameter validateBankAccountAttributes=false to DDM endpoint
	
- account type is not set to any default value

## 🔗 Connections (1)

- → Realisation: [[LOR-9041 - Unified DDM (ADA) (Requirement 1764224)]]

## 📊 Appears In (1 diagrams)

- Custom: LOR-9582 DDM validation when signing agreement
