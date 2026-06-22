---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Remotely filling/Business rules"
domain: "Analysis Model"
element_id: 1716866
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Allowed status or substatus for remote application

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Remotely filling/Business rules

## 📝 Notes

Allowed status and substatus for application:

	
- In pre-process - PLW (LAP waiting)
	
- In pre-process - POG (Offers generated)
	
- In pre-process - ACL (Approved with cross-sell offers)
	
- In pre-process - CF (Client draft)
	
- In pre-process - PDRAFT (Draft)


	
- In pre-process - PCI (CIF Identified)
	
- In pre-process - PCM (CIF Manual)


	
- In pre-process - PCW (CIF Waiting)
	
- In process - RCI (CIF Identified)
	
- In process - RCM (CIF Manual)
	
- In process - RCW (CIF Waiting)
	
- In process - RLW (LAP waiting)
	
- In process - ROG (Offers generated)
	
- In process - RLWO (LAP waiting after offers)
	
- Approved
	
- Signed (but the contract is not added to any contract package AND contract is not registered)

## 🔗 Connections (2)

- ← Dependency: [[Get client's remotely created applications to display]]
- ← Generalization: [[Allowed status and substatus for remote application - IN,VN,ID,PH]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
