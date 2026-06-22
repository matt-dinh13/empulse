---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833413
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Terminate bonus services on contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

This rule describes termination all active bonus services adjusted on a contract.
Input:

	
- Contract
	
- Reason


Steps:

	
- System gets all active bonus services adjusted on the contract (i.e. Contract Service having Service -> Service Type.Service Type Flag = BONUS_SERVICE and Contract Service.Status = ACTIVE and Contract = Contract)
	
- For each the service found, system sets:
- status of the Service (Contract Service.Status) to "TERMINATED"
- reason to Reason
- end date (Contract Service.End Date) to the given effective date of termination.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}08.362 Process payment holiday request]]
- ← Dependency: [[{MOD}08.406 Process request for loan restructuring]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Loan restructuring processing
- Use Case: Payment holiday processing
