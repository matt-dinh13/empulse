---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules"
domain: "Analysis Model"
element_id: 1610895
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 SNM User Synchronization

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules

## 📝 Notes

- System performs synchronization of the processed user and his supervisors according to the algorithm SN synchronization - Users. If any synchronization fails then whole synchronization is skipped. 
	
- System performs the synchronization of relations between the processed user and his supervisors, i.e. all passed relations are created (if does not exist) and the others are erased.

## 🔗 Connections (2)

- → Dependency: [[SN synchronization - Users]]
- ← Dependency: [[Algorithm_Synchronization of SN object]]

## 📊 Appears In (2 diagrams)

- Custom: SNM Synchronization
- Custom: SNM User Synchronization
