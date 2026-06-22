---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1613 (CBL-4414) Separation of bank account management using BankAccountWS"
domain: "Requirements Model"
element_id: 1332807
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 Bank account code and Bank branch synchronization code

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1613 (CBL-4414) Separation of bank account management using BankAccountWS

## 📝 Notes

Bank account code:

	
- Add new string attribute of Bank account
	
- Generate its values from a sequence (initially we need to generate it to all existing bank accounts)
	
- Create a tech CBL for migration from Bank account id to Bank account code


Bank branch synchronization code:

	
- Add new attribute Bank branch synchronization code to Bank account
	
- Remove direct link from Bank account to Bank branch id (X_BANK_BRANCH_ID)
	
- Create tech CBL for migration from Bank branch id to Bank branch synchronization code

## 🔗 Connections (1)

- → Generalization: [[PAYM-1613 (CBL-4414) Separation of bank account management using BankAccountWS (Requirement 1332809)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1613 (CBL-4414) Separation of bank account management using BankAccountWS
