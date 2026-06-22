---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Business rules"
domain: "Analysis Model"
element_id: 1869884
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 System event processing - send a JMS message

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/System events/Business rules

## 📝 Notes

Input:

	
- a child of SystemEvent 


	
- ProcessingSpecification


Algoritm:
System generates a JMS message with a XML file according to the XSD whose name is set in passed ProcessingSpecification.
For generating the XML file are used the objects contained in the input system event.

Note: Description of filling particular items of a XML file is specified within a particular XSD in the analysis model.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}System event processing]]

## 📊 Appears In (1 diagrams)

- Custom: System events processing setting
