---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules"
domain: "Analysis Model"
element_id: 1833427
diagrams: 9
connections: 8
tags:
  - requirement
  - analysis-model
---

# 📋 Pause bonus service evaluation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Business Rules

## 📝 Notes

This rule describes setting an attribute of Contract Service to pause/allow evaluation of bonus services (e.g. Gift payment, Grace period)
Input:

	
- EvaluationPaused
	
- Contract


Steps:

	
- System gets all active bonus services adjusted on the contract (i.e. Contract Service having Service -> Service Type.Service Type Flag = BONUS_SERVICE and Contract Service.Status = ACTIVE and Contract = processed Contract)
	
- Set Contract Service.Is Paused = EvaluationPaused where Contract Service.ID in (Contract Services found in previous step)

## 🔗 Connections (8)

- ← Dependency: [[01.797 Create ContractPayholRequest service]]
- ← Dependency: [[{MOD}08.362 Process payment holiday request]]
- ← Dependency: [[08.355 Create request for payment holiday (UseCase 1862152)]]
- ← Dependency: [[{MOD}08.406 Process request for loan restructuring]]
- ← Dependency: [[{MOD}08.403 Create request for loan restructuring common]]
- ← Dependency: [[08.407 Evaluate CheckTL fulfillment common]]
- ← Dependency: [[08.409 Evaluate Checking Terms of Loan Service]]
- ← Dependency: [[08.357 Cancel request for loan service (UseCase 1879719)]]

## 📊 Appears In (9 diagrams)

- Custom: Business Rules
- Use Case: Checking Terms of Loan Service
- Use Case: Collection tool requests management
- Use Case: Loan restructuring processing
- Use Case: Loan restructuring request creation - externally
- Use Case: Loan restructuring request creation - via GUI
- Use Case: Payment holiday processing
- Use Case: Payment holiday request creation - externally
- Use Case: Payment holiday request creation - via GUI
