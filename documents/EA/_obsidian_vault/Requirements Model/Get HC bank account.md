---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation"
domain: "Requirements Model"
element_id: 1878543
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Get HC bank account

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1347 (CBL-3618) Automate outgoing payment orders generation

## 📝 Notes

Input:
hcBankAccount [nullable]

Output:
Bank Account
result

 

	
- if the Input.hcBankAccount is null


	
- //outgoing payment is without JFS partner OR the system is not set automatic assigning source bank account for JFS outgoing payments
IF Outgoing Payment.Joint-Lending Partner Code is null OR global parameter AutomaticAssignJFSEscrowAccounts = false THEN
the system gets Bank Account-SOURCE where AccountNumber = global parameter AutomaticOutPayOrderDefaultHCBankAccount[0] and Bank Account->BankBranch.Code = AutomaticOutPayOrderDefaultHCBankAccount[1] 
IF no such a record is found OR found Bank Account.Holder Type is not "HC (HC)" THEN
the system responds by result = 'HC_BANK_ACCOUNT_NOT_FOUND' and the use case ends.



	
- //outgoing payment has filled JFS partner code AND system is set to automatic assigning source bank account for JFS outgoing payments
ELSE IF Outgoing Payment.Joint-Lending Partner Code is NOT null AND global parameter AutomaticAssignJFSEscrowAccounts = true THEN 
the system tries to find a record in JFC Partner Code To Bank Account
where JFC Partner Code = Outgoing Payment.Joint-Lending Partner Code
IF no record is found, the system responds by output.result = 'HC_BANK_ACCOUNT_NOT_FOUND' and the use case ends.
ELSE the system sets Bank Account-SOURCE = JFC Partner Code To Bank Account->Bank Account and result = 'SUCCESS'



	
- else if Input.hcBankAccount is not null
system tries to find the HC bank account = Input.hcBankAccount
IF no record is found, the system responds by result = 'HC_BANK_ACCOUNT_NOT_FOUND' and the use case ends.
ELSE the system sets Bank Account-SOURCE = input.hcBankAccount and result = 'SUCCESS'

## 🔗 Connections (2)

- ← Association: [[Get HC account number for outgoing payment disbursement]]
- ← Dependency: [[05.112 Generate payment orders on external request]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1347 (CBL-3618) Automate outgoing payment orders generation
- Use Case: Process outgoing payments
