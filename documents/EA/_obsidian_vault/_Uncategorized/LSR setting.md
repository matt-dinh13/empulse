---
type: Requirement
stereotype: "Functional"
package: ""
domain: "_Uncategorized"
element_id: 1805253
diagrams: 0
connections: 0
tags:
  - requirement
  - _uncategorized
---

# 📋 LSR setting

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: N/A

## 📝 Notes

- System search for the Loan Service Request having Request Type in (FER, PER, CET) and Current Status = 'CREATED' and related to the processed Contract
	
- System deactivates the found Loan Service Requests with Current Status = 'CANCELLED'; and creates a record in related Loan Service Request Status Transition entity.
	
- If an active Loan Service Request of Requests Type = COP with extension of Early Repayment Request (ERR) exists then confirm its processing (i.e. set LSR.Current Status = EXECUTED and creates record in related LSR.Loan Service Request Status Transition entity.
