---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Business rules"
domain: "Modules"
element_id: 1223733
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Filter instalment messages

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Business rules

## 📝 Notes

Input:

	
- accountType                ...value from AccountTypeDto
	
- billingSystem               ...value from BillingSystemTypeDto
	
- reconciliationType      ...value from ReconciliationTypeDto


Output:

	
- result     ...boolean --> true if the combination passed, false otherwise


Algorithm:
System returns a boolean value according to the following combinations (accountType, billingSystem, reconciliationType):

	
- REVOLVING_ACCOUNT,   HOMER,   Any reconciliationType --> true
	
- REVOLVING_ACCOUNT,   CABUS,   OWN_FUNDS --> false
	
- REVOLVING_ACCOUNT,   CABUS,   (DEBT or OVERDRAFT) --> true
	
- CURRENT_ACCOUNT,   (HOMER or CABUS),   OWN_FUNDS --> false
	
- CURRENT_ACCOUNT,   HOMER,   (DEBT or OVERDRAFT) --> false
	
- CURRENT_ACCOUNT,   CABUS,   (DEBT or OVERDRAFT) --> true

## 🔗 Connections (2)

- ← Dependency: [[Processing PaidInstalmentMessageDto]]
- ← Dependency: [[Processing InstalmentMessageDto]]

## 📊 Appears In (3 diagrams)

- Custom: COMMON for comm. with CaBus - Business rules
- Custom: Incoming payments - Business rules
- Custom: Installment schedule - Business rules
