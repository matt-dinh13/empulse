---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/UseCase Model"
domain: "Analysis Model"
element_id: 1328134
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Find or create bank account

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/UseCase Model

## 📝 Notes

{ADD CBL-4414 PAYM-1613 /}

This business rule searches for a bank account based on provided input parameters and returns its code. If such bank account doesn't exist the business rule creates a new one and return its code.

Input:

	
- Account number
	
- Account type - 'CC' (cash credit) ,'CA' (current account),'SA' (saving account)
	
- Holder name
	
- Bank branch code
	
- Holder type (optional) - '3P' or 'HC'


Output:

	
- Bank account code - id of a found or newly created bank account


Steps:
1. System searches for Bank Account using {ADD}Find bank account with parameters Account number, Account type, Holder name and Bank branch code.
2. If Bank Account is not null then system returns its bank account code as Bank account code.
2.1. Else system creates new Bank Account with attributes:
- Account Number = provided Account number
- Type = provided Account type
- Holder Name = provided Holder name
- Bank Branch Code = Bank Branch.Id of provided Bank branch code
- Holder Type = provided Holder type, '3P' if not provided
- Currency Code = code of home currency of the specific country
2.2. System returns bank account code of the created Bank Account as Bank account code.

## 🔗 Connections (3)

- → Dependency: [[{ADD}Find bank account]]
- ← Dependency: [[{ADD}00.500 Create bank account on external request (UseCase 1877810)]]
- ← Dependency: [[{ADD}00.510 Update bank account on external request (UseCase 1877806)]]

## 📊 Appears In (1 diagrams)

- Use Case: BankAccountWS operations - use case model
