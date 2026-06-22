---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753467
diagrams: 3
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Get first working date after passed date

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

Input: 

	
- date


Output:

	
- firstWorkingDate


System returns firstWorkingDate what is first date after passed date which is not non-working day (see Determinate non-working days)

Determinate non-working days
If GlobalParameter.AddressLevelCode = null then non-working days are dates in Non-working day definition where Address_level_code = null.
Else system finds $Address_level_code = DDM->BankAccount->BankBranch->BankBranchAddress[where Archived=false]->Address->Code of refered entity according AddressLevel (i.e. Code of reffered Region, District or Sub-District)
and than as non-working days are taken dates in "Non-working day" enumeration where 
   (Address_level_code = $Address_level_code) OR (Address_level_code = null)

## 🔗 Connections (4)

- ← Dependency: [[DDS - Number of days before the due date determination]]
- ← Dependency: [[05.271 Process DDS request]]
- ← Dependency: [[05.130 Generate DD statements (UseCase 1863204)]]
- ← Dependency: [[05.250 Process DD statements import (UseCase 1863189)]]

## 📊 Appears In (3 diagrams)

- Use Case: Automatic import DD statements and confirmations
- Use Case: DDS requests from external systems
- Use Case: Direct Debit statements
