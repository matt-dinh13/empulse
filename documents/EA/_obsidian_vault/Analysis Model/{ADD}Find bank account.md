---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/UseCase Model"
domain: "Analysis Model"
element_id: 1328135
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Find bank account

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/UseCase Model

## 📝 Notes

{ADD CBL-4414 PAYM-1613 /}

This business rule searches for a bank account based on provided input parameters and returns its code.

Input:

	
- Account number
	
- Account type - 'CC' (cash credit) ,'CA' (current account),'SA' (saving account)
	
- Holder name
	
- Bank branch code


Output:

	
- Bank account code - code of a found bank account or null if not found


Steps:
1. System searches for Bank Accounts where Account Number = provided Account number AND Type = provided Account type AND Holder Name = provided Holder name AND Bank Branch Code = provided Bank branch code.
2. If at least one Bank Account is found then system returns code of the first of them as Bank account code. (this can be modified once the duplicities removal is finished)
2.1. Else system returns null.

## 🔗 Connections (2)

- ← Dependency: [[{ADD}Find or create bank account]]
- ← Dependency: [[{ADD}00.510 Update bank account on external request (UseCase 1877806)]]

## 📊 Appears In (1 diagrams)

- Use Case: BankAccountWS operations - use case model
