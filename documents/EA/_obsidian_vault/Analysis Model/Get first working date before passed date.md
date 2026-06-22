---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753472
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Get first working date before passed date

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

Input: 

	
- date
	
- offset    ...integer


Output:

	
- firstWorkingDate


System returns firstWorkingDate what is a first date before passed (date - offset) which is not non-working day (see Determinate non-working days).
If firstWorkingDate is lower then current date, than firstWorkingDate = current date.

Determinate non-working days
If GlobalParameter.AddressLevelCode = null then non-working days are dates in Non-working day definition where Address_level_code = null.
Else system finds $Address_level_code = DDM->BankAccount->BankBranch->BankBranchAddress[where Archived=false]->Address->Code of refered entity according AddressLevel (i.e. Code of reffered Region, District or Sub-District)
and than as non-working days are taken dates in "Non-working day" enumeration where 
   (Address_level_code = $Address_level_code) OR (Address_level_code = null)


e.g. 1:
current date = 20.12.
date = 26.12.
x = 4
holydays = 24-26.12.
firstWorkingDate --> 22.12.

e.g. 2:
current date = 23.12.
date = 26.12.
x = 4
holydays = 24-26.12.
firstWorkingDate --> 23.12.

## 🔗 Connections (2)

- ← Dependency: [[05.130 Generate DD statements (UseCase 1863204)]]
- ← Dependency: [[05.250 Process DD statements import (UseCase 1863189)]]

## 📊 Appears In (1 diagrams)

- Use Case: Direct Debit statements
