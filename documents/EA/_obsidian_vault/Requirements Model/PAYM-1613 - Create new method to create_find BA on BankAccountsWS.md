---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1613 - (CBL-4414) - Separation of bank account management using BankAccountWS"
domain: "Requirements Model"
element_id: 1318909
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-1613 - Create new method to create/find BA on BankAccountsWS

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1613 - (CBL-4414) - Separation of bank account management using BankAccountWS

## 📝 Notes

In order to allow external systems and other BSL modules/parts to create/update bank accounts in a unified way, we need to:

	
- implement new method findOrCreateBankAccount() in BankAccountWS
	
- start using externalId + sourceSystem for communication with external systems?
	
- start using bankAccountCode for external communication instead of bankAccountId?

start using of bankBranchCode instead of bankBranchId

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1613 - Use new logic for creating/updating bank accounts
