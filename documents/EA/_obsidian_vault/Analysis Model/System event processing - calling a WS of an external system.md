---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Business rules"
domain: "Analysis Model"
element_id: 1869883
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 System event processing - calling a WS of an external system


> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Business rules

## 📝 Notes

Input:

	
- a child of SystemEvent 


	
- ProcessingSpecification


Algoritm:
System calls WS defined in passed ProcessingSpecification (where is set e.g. something like CaBus.AccountTransactionWS.unpairPayment()).

Note: Description of filling particular items of XML elements in WS request object is specified within a particular XSD in the analysis model.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}System event processing]]

## 📊 Appears In (1 diagrams)

- Custom: System events processing setting
