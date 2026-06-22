---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules"
domain: "Modules"
element_id: 1310131
diagrams: 3
connections: 5
tags:
  - requirement
  - modules
---

# 📋 Processing CELAccountTransactionsRequest

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules

## 📝 Notes

Input:

	
- CELAccountTransactionRequest


Algorithm:
System for:

	
- ClosedEndLoanTransaction referenced in ClosedEndLoanTransactionSetRequest.principal creates a record in the table TRANSAC150 according to the algorithm Process CELPrincipalAccountTransaction 
	
- for all CELInsuranceAccountTransaction referenced in ClosedEndLoanTransactionSetRequest.insuranceItems creates a record in the table TRANSAC150 according to the algorithm Process CELInsuranceAccountTransaction
	
- for all FeeCELAccountTransaction referenced in ClosedEndLoanTransactionSetRequest.fees creates a record in the table ACCOPER156 according to the algorithm Process CELFeeAccountTransaction

## 🔗 Connections (5)

- → Dependency: [[REQ#1 Messages TRANSAC150 and ACCOPER156]]
- → Dependency: [[Processing CELFeeAccountTransaction]]
- → Dependency: [[Processing CELInsuranceAccountTransaction]]
- → Dependency: [[Processing CELPrincipalAccountTransaction]]
- ← Dependency: [[{DEL}CELAccountTransactionsRequest]]

## 📊 Appears In (3 diagrams)

- Custom: Account Transactions - Business rules
- Custom: BRR-2203 - OBS interface - Transactions on contracts (CEL)
- Logical: CEL Account Transactions - Communication model
