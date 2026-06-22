---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Use Case"
domain: "Analysis Model"
element_id: 1807827
diagrams: 8
connections: 8
tags:
  - requirement
  - analysis-model
---

# 📋 Check for collection tool services

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Use Case

## 📝 Notes

This rule check if an active Loan Service Request for a service of Collection tool category exists. This check is performed at some of FER, PER, COL, CET service requests is asked.

Output:

	
- Result[] = array of Service Codes of found requests, else NULL


Result[] = Loan Service Request.Request Type from Loan Service Request having Current Status = CREATED and Service Type.Service Type Flag = COLLECTION_TOOL_SERVICE

## 🔗 Connections (8)

- ← Dependency: [[{MOD}Check COP ER request availability]]
- ← Dependency: [[{MOD}Check CET request availability]]
- ← Dependency: [[Check ER request availability]]
- ← Dependency: [[08.355 Create request for payment holiday (UseCase 1862152)]]
- ← Dependency: [[08.354 Show parameters of payment holiday (UseCase 1862151)]]
- ← Dependency: [[{MOD}08.062 Create request for change due date]]
- ← Dependency: [[08.061 Show parameters for change due date (UseCase 1862209)]]
- ← Dependency: [[{MOD}Check PER request availability]]

## 📊 Appears In (8 diagrams)

- Use Case: CHDDR request creation - via GUI
- Use Case: Contract Early Termination request creation
- Use Case: Cooling-off period request
- Use Case: Full early repayment request - externally
- Use Case: Full early repayment request - via GUI
- Use Case: Payment holiday request creation - via GUI
- Use Case: PER request creation - externally
- Use Case: PER request creation - via GUI
