---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules"
domain: "Analysis Model"
element_id: 1610884
diagrams: 4
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 SN synchronization - Cobrand groups

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules

## 📝 Notes

- When a new Cobrand group is obtained in the synchronization message (i.e. code of the Cobrand group from the message is not found in system), a new record in the code list is created (the name is used for all localizations).
	
- When an existing Cobrand group is obtained in the synchronization message the current name of group is updated if differs to received name of group (the name is used for all localizations).
	
- Cobrand group assignments obtained in synchronization message must be processed in ascending order by validFrom.
	
- If already exists an assignments to Partner/Salesroom with the same validFrom and different validTo as the assignment obtained  then validTo of existing assignment is updated.
	
- If an assignments to Partner/Salesroom with validFrom different to existing assignments is obtained then new assignment is created.
	
- If validation rule Cobrand group assignment validity is broken during synchronization, system logs an error and skips whole synchronization of the given object.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}SNM Partner and Salesroom Synchronization]]

## 📊 Appears In (4 diagrams)

- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization
