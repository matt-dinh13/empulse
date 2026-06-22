---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules"
domain: "Analysis Model"
element_id: 1610892
diagrams: 3
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 SN synchronization - Bank accounts

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules

## 📝 Notes

- At most MaxNumberOfPaymentAccounts (system parameter) bank accounts with flag ForPayments set to 'TRUE' can exist for a Partner. If the to-be-synchronized bank accounts do not meet this rule, system logs an error and skips whole synchronization of the given partner. The same is applicable also for salesrooms.
	
- At least one bank account with flag ForPayments set to 'TRUE' must be assigned to the Partner. If a Partner breaks this rule during synchronization, system logs an error and skips whole synchronization of the given partner.
	
- For all bank accounts, the attribute Holder_Type will be set to '3P'(third party).


1.  System Find or create bank account
2.  System assign bank account from previous step to partner/salesroom

## 🔗 Connections (3)

- → Generalization: [[REQ#1 Message SELLERPLACE130 (Boundary 1610899)]]
- → Dependency: [[REQ#2 SNM synchronization - two accounts for KAZPOST]]
- ← Dependency: [[{MOD}SNM Partner and Salesroom Synchronization]]

## 📊 Appears In (3 diagrams)

- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
- Logical: SNM Bank Account Synchronization
