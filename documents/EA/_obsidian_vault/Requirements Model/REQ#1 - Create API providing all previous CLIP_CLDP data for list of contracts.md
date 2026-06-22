---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector"
domain: "Requirements Model"
element_id: 1301407
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - Create API providing all previous CLIP/CLDP data for list of contracts

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector

## 📝 Notes

The goal is to create new API which finds and returns all previous CLIP/CLDP data for list of contracts.
It will be used by LAP to extend vector for new contract approval. 
Inputs: list of contracts
Outputs: for each contract return list of CLIP/CLDP with fields:

	
- Request DateTime
	
- Original Credit limit
	
- Required Credit Limit
	
- Currency
	
- Source type
	
- Result

## 🔗 Connections (1)

- → InformationFlow: [[01.175 Get contracts credit limit changes]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-3579 (CLM-1390) Previous CLIP/CLDP data for new contracts approval vector
