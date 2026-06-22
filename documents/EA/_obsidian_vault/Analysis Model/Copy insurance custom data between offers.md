---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Use Case Model"
domain: "Analysis Model"
element_id: 1706414
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Copy insurance custom data between offers

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Use Case Model

## 📝 Notes

This algorithm describes how insurance custom data are copied between two distinct objects of offer financial parameters.

Input:

	
- Offer Financial Parameters - source - mandatory
	
- Offer Financial Parameters - target - mandatory


Pre-condition:
It is assumed that empty insurance custom data values have already been created in the target offer financial parameters.

Steps::

	
- System iterates through all insurance services adjusted in the target offer (Offer Financial Parameters[target]->Offer Insurance Service). 
	
- System looks if in source offer there is an Insurance service with the same service code adjusted (Offer Financial Parameters[source]->Offer Insurance Service where Service.Code = Offer Financial Parameters[target]->Offer Insurance Service->Service.Code)
	
- If matching source Offer Insurance Service is found system iterates through all Offer Insurance Custom Data in the source Offer Insurance Service and copies values to the matching (with matching Codes) Offer Insurance Custom Data in the target Offer Insurance Service.  If there is no matching target, given  Offer Insurance Custom Data object is ignored.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}08.115 Collect insurance custom data for alternative offer]]

## 📊 Appears In (1 diagrams)

- Use Case: Select insurance services
