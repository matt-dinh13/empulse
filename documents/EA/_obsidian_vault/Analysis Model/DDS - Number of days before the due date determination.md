---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753487
diagrams: 2
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 DDS - Number of days before the due date determination

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

Input:

	
- due date
	
- contract



Parameter X has to be determined this way:

	
- System finds DDM based on the following:
- the DDM is assigned to the contract related to the selected installment
- the DDM  is active on the selected due date (Contract->DDM.Valid_From <= due date <= Contract->DDM.Valid_To)
	
- If DDM has associated ECS provider (DDM.ECS_Provider is not null) then X = DDM.ECS_Provider.Due_Date_Offset
	
- If DDM does NOT have ECS provider  associated, then system determines X as due date offset defined in Direct Debit Provider relation of bank which issued client's bank account (DDM->Bank_Account->Bank->Direct_Debit_Provider.Due_Date_Offset)
If Direct_Debit_Provider.Due_Date_Offset is null then X = global parameter DefaultDDDueDateOffset
	
- If global parameter ShiftDDSDueDateMethod = BEFORE finds x-th working day after as follows:
- system gets X-th (X = global parameter DefaultDDDueDateOffset) working day (see Determinate non-working days) after passed due date.
System returns X = number of days between due date and x-th working day after.


Determinate non-working days
If GlobalParameter.AddressLevelCode = null then non-working days are dates in Non-working day definition where Address_level_code = null.
Else system finds $Address_level_code = DDM->BankAccount->BankBranch->BankBranchAddress[where Archived=false]->Address->Code of refered entity according AddressLevel (i.e. Code of reffered Region, District or Sub-District)
and than as non-working days are taken dates in "Non-working day" enumeration where 
(Address_level_code = $Address_level_code) OR (Address_level_code = null)

e.g.:
- Holidays = 24-26.12.
- X = 3
- global parameter ShiftDDSDueDateBeforeOrAfterWD = BEFORE 
- due date = 23.12.
- x-th working day after = 29.12.
- returned X = number of days between (23.12. and 29.12)

## 🔗 Connections (3)

- → Dependency: [[Get first working date after passed date]]
- ← Dependency: [[05.271 Process DDS request]]
- ← Dependency: [[05.130 Generate DD statements (UseCase 1863204)]]

## 📊 Appears In (2 diagrams)

- Use Case: DDS requests from external systems
- Use Case: Direct Debit statements
