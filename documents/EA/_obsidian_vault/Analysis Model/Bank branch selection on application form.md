---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/VN/Payment"
domain: "Analysis Model"
element_id: 1639469
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Bank branch selection on application form

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Validation Rules/VN/Payment

## 📝 Notes

If selected bank has setting CASH_LOAN_DISB_ELIGIBLE = 1 and onlineDisbursementAllowed =1
Then Region and bank branch fields are hidden and bank branch is set based on following rule:
- system gets all active branches for selected bank
- system sets headquarter's bank branch (BankBranch.IsHeadquarters = 1) randomly if exists otherwise MSG_BANK_BRANCH_NOT_FOUND is displayed

Otherwise
System may contain a huge number of bank branches. Therefore it's needed to reduce number of branches offered to user.
This reduction is done through mandatory selection of values in another attributes before bank branch can be selected. These attributes are:

	
- Bank
	
- Region


User isn't able to select bank branch before selection of values for all above mentioned attributes is done. When all of those attributes contain values, then system offers bank branches which match all criteria and user can select one of them.

## 🔗 Connections (3)

- ← Dependency: [[Bank (Action 1639475)]]
- ← Dependency: [[Bank Branch]]
- ← Dependency: [[Province (Action 1639474)]]

## 📊 Appears In (1 diagrams)

- Custom: Payment
