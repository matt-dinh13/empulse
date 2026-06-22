---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Business Rules"
domain: "Analysis Model"
element_id: 1501358
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Insurance Program Common properties of Versioned Entities

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Program - old BSL/Insurance program Root/Business Rules

## 📝 Notes

- Each instance of versioned entity is identified by unique Code (common for all versions), each version of instance has its unique VersionNumber, only one version of instance is Active.
	
- Relations between versioned entities are by Code only.
	
- When any change of entity is required, new version is copied from Active version, adjusted and Activated (previous Active version is terminated).
	
- Product calculator uses only Active versions of entities.
	
- When any offer is calculated, Code and  VersionNumber of each used version of entity is saved and later copied to the loan contract (= origination version). 
	
- It depends on particular algorithm whether uses  origination versions or other (usually Active) version. 
For Tariff Items a flag UseCurrentTariff is defined, which indicates if origination or Active(current) version of Tariff should be used for Tariff Item Amount calculation.

## 📊 Appears In (1 diagrams)

- Custom: Business Rules for Insurance Program Versioned Entity
