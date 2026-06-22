---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Business rules"
domain: "Analysis Model"
element_id: 1234524
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Account number structure - KZ

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Bank Account Management/Business rules

## 📝 Notes

Structure of KZ bank account number (IBAN format):

	
- 1. and 2. character = 'KZ',


	
- 3. a 4. character is checksum (see algorithm below)


	
- 5. - 7. character correspond with last three characters of Bank.Supplementary_Code


Checksum algorithm
Checksum = 98 – (([bank code] + [account number] + [country code] + ‘00’) MOD 97), where

	
- [bank code] - last three characters of Bank.Supplementary_Code
	
- [account number] - last 13 characters of entered account number
	
- [country code] - first two characters of entered account number,

Sign '+' is used as concatenation, not addition. If any of the character is letter, it is converted to number (‘A’=10, ‘B’=11...‘K’=20... ‘Z’=35).

Example: 
Entered account number KZ735630421AA0001409, Bank.Supplementary_Code for selected bank is 190875563.
Checksum = 98 - ((563042110100001409203500) mod 97) = 98 - 25 = 73

## 🔗 Connections (3)

- ← Dependency: [[Account number - KZ]]
- → Generalization: [[Account number structure]]
- ← Dependency: [[Fill bank according to account number]]

## 📊 Appears In (2 diagrams)

- Custom: Business rules
- Custom: Validation rules KZ
