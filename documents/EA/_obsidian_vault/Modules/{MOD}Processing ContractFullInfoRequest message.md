---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2996 - ChR - OBS interface - Updates in communication regarding payments"
domain: "Modules"
element_id: 1148241
diagrams: 5
connections: 5
tags:
  - requirement
  - modules
---

# 📋 {MOD}Processing ContractFullInfoRequest message

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2996 - ChR - OBS interface - Updates in communication regarding payments

## 📝 Notes

Input:

	
- ContractFullInfoRequest


Algorithm:
System creates a record in the CREDIT110 comm table by mapping and transformation rules defined in the attached table.

## 🔗 Connections (5)

- → Dependency: [[REQ1 Use attribute credit limit for all REL contracts]]
- → Dependency: [[REQ#7 Translate contract codes to contract DB ID for migrated contracts]]
- → Dependency: [[Get OBS contract identification]]
- ← Dependency: [[REQ#1 - Extension of Contract full info notification]]
- ← Dependency: [[{DEL]ContractFullInfoRequest]]

## 📊 Appears In (5 diagrams)

- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
- Custom: BRR-3421 ChR - Send credit limit in Credit110 to OBS for REL contracts
- Custom: CBL-817 - Change to BSL and CBSA module by consolidation process
- Custom: Contract - Business rules
- Logical: Contract notifications - Communication model
