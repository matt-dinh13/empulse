---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Business Rules"
domain: "Analysis Model"
element_id: 1817923
diagrams: 3
connections: 8
tags:
  - requirement
  - analysis-model
---

# 📋 DDM attributes validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/COMMON for DDM/Business Rules

## 📝 Notes

This is a common set of mandatory values for DDM:

	
- Bank account number (BankAccount.AccountNumber)
	
- Bank account holder (BankAccount.HolderName)
	
- Bank account currency (BankAccount.Currency)
	
- Bank account type (BankAccount.Type)
	
- DDM limit (Limit)
	
- DDM frequency (Frequency)
	
- Bank account bank (BankAccount.Bank.Name)
	
- Bank account branch (BankBranch.Name)


Specific validation may be defined for different countries, see:

	
- India: DDM attributes validation - IN
	
- India: DDM attributes validation - ID

## 🔗 Connections (6)

- ← Generalization: [[DDM attributes validation - IN]]
- ← Generalization: [[DDM attributes validation - ID]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[{MOD}01.187 Sign contract]]
- ← Dependency: [[{MOD}01.099 Sign contract externally]]
- ← Dependency: [[01.096 Prepare documentation externally (UseCase 1879294)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Use Case: Contract signing
- Use Case: Prepare documentation to sign
