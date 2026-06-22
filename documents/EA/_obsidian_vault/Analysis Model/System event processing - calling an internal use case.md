---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Business rules"
domain: "Analysis Model"
element_id: 1869885
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 System event processing - calling an internal use case

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Business rules

## 📝 Notes

Input:

	
- a child of SystemEvent 


	
- ProcessingSpecification


Algoritm:
System calls a BSL use case defined in passed ProcessingSpecification (where is set e.g. something like '05_045').
As input parameters are passed objects included within passed system event (or determined object from them).

## 🔗 Connections (1)

- ← Dependency: [[{MOD}System event processing]]

## 📊 Appears In (1 diagrams)

- Custom: System events processing setting
