---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1575150
diagrams: 0
connections: 1
tags:
  - requirement
  - _uncategorized
---

# 📋 Check for no concurrent DDMs

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

The goal of this check is to find out whether there are active DDMs on a given contract already. This is used throughout the application usually for checking if a new DDM can be created on a contract - the system in general should not allow creation of a new DDM if there is an active DDM on a contract already.

Input: Contract
Output: True/False

The system returns TRUE (i.e. there are no active DDMs on a contract and a new DDM therefore can be created) if the following conditions are fulfilled.

	
- No DDM with (DDM.Valid_From >= "current date") and (DDM.Status = 'AVAILABLE' or 'SENT_TO_CONFIRMATION' or 'CONFIRMATION_EXPORT_GENERATING') exists


	
- No DDM with (DDM.Valid_From <= "current date"< DDM.Valid_To) and (DDM.Status = 'AVAILABLE' or (DDM.Status = 'RECEIVED_FROM_CONFIRMATION' and DDM.Confirmation_Status = 'APPROVED')) exists



Otherwise the sytem returns FALSE (i.e. there are some active DDM on a contract and no new DDM should be allowed to be created).

## 🔗 Connections (1)

- ← Dependency: [[Business validation of DDM data for create]]
