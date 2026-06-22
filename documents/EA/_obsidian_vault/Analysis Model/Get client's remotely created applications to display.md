---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Remotely filling/Business rules"
domain: "Analysis Model"
element_id: 1716868
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Get client's remotely created applications to display

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Remotely filling/Business rules

## 📝 Notes

Find list all remotely created applications, that can be displayed.

Input:

	
- CUID or input based on Attributes used for searching


All following conditions must be fulfilled. If CUID is on input:
1. The contract was created remotely (Contract.Created remotely=TRUE).
2. The contract has CUID from the input (Contract-> Deal -> Client.CUID)
3. The contract is in one of Allowed status or substatus for remote application
4. If global parameter MysteryShoppingTracking = TRUE, only contracts with Contract.Mystery_Shopping_Status = FALSE are displayed.

Output:

	
- list of applications

## 🔗 Connections (3)

- → Dependency: [[Allowed status or substatus for remote application]]
- ← Dependency: [[{MOD}01.081 Fill in application - 1SP]]
- ← Dependency: [[Display remotely created applications]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
