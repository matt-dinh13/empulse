---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/Business Rules"
domain: "Analysis Model"
element_id: 1573593
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Get event type for commodity data update

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/Business Rules

## 📝 Notes

This object describes an algorithm, how system gets the event type for commodity data validation.

Input:
- contractCode = code of the contract related to the commodity to be updated

Output:
- eventType = type of the event to be used as an input for commodity data validation

Algorithm:

	
- System takes the contractCode from the input.
	
- System gets the status of a contract with corresponding code (i.e. Contract[.Code=contractCode].Status) and based on it determines the applicable eventType as follows:
- 'CONTRACT_ORIGINATION' - for contract in statuses: In Pre-process (P), In Process (R), Approved (S), Rejected (D)
- 'CONTRACT_SIGNATURE' - for contract in status: Signed (N)
- 'CONTRACT_REGISTRATION' - for contract in statuses: Active (A), Canceled (T)
	
- System returns the respective eventType and algorithm ends.

## 🔗 Connections (3)

- ← Dependency: [[Get validation parameters for commodity data update]]
- ← Dependency: [[{ADD}01.650 Edit Contract Commodity [CLM]]]
- ← Dependency: [[01.650 Edit Contract Commodity (UseCase 1852203)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Manage contract commodities
