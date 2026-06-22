---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Logical Data Model"
domain: "Analysis Model"
element_id: 1868549
diagrams: 13
connections: 31
tags:
  - class
  - analysis-model
---

# 🔷 Loan Service Request

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/CEL Rewards/Logical Data Model

## 📝 Notes

General entity of a request for a Loan Service granting (application). The entity is extended by next service request attributes by defied by particular Request Type.

Notice to implementation: 
Loan Service Request is in composition of Contract Service only. Due to data optimization, there can be reference to Contract implemented here.

## 🔗 Connections (28)

- ← Generalization: [[Payment Holiday Request]]
- ← Generalization: [[Change Due Date Request]]
- ← Generalization: [[CEL Reward Request]]
- ← Generalization: [[Checking Terms of Loan Service Request]]
- ← Generalization: [[Loan Consolidation Request]]
- ← Generalization: [[Loan Restructuring Request]]
- ← Generalization: [[LoanRestructuringRequest]]
- ← Generalization: [[CELRewardRequest]]
- ← Generalization: [[EarlyRepaymentRequest]]
- ← Generalization: [[LoanConsolidationRequest]]
- ← Generalization: [[CheckingTermsRequest]]
- ← Generalization: [[ChangeDueDateRequest]]
- ← Generalization: [[PaymentHolidayRequest]]
- ← Association: [[Contract Supplement Scoring]]
- ← Aggregation: [[Loan Service Request Presented Interest Rate]]
- ← Aggregation: [[Loan Service Request Status Transition (Class 1868576)]]
- → Aggregation: [[Contract Service (Class 1868570)]]
- ← Aggregation: [[Service Offer Installment]]
- → Dependency: [[Service Operation Status Type (Enumeration 1868571)]]
- → Association: [[Contract Supplement (Class 1862126)]]
- → Association: [[{MOD}Contract (Class 1879596)]]
- ← Aggregation: [[Evaluated Bonus Service]]
- ← Aggregation: [[Charged Fee To Request]]
- ← Aggregation: [[Loan Service Request Document]]
- → Dependency: [[Loan Service Request Status Type (Enumeration 1868544)]]
- ← Generalization: [[Early Repayment Request]]
- ← Generalization: [[Interest Back Request]]
- ← Generalization: [[{ADD}Insurance Offer Request]]

## 📊 Appears In (13 diagrams)

- Logical: CEL Rewards request
- Logical: Change due date request
- Logical: Checking Terms of Loan Service Request
- Logical: Collection tool operation domains
- Logical: Contract - Document
- Logical: Contract Service
- Logical: Early repayment request
- Logical: Interest Back 
- Logical: Loan consolidation - Logical Data Model
- Logical: Loan restructuring request domain
- Logical: Loan Service Request domain
- Logical: LSR.Insurance Offer - Logical Data Model
- Logical: Payment holiday request

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Current Status | Loan Service Request Status Type |  |
| Expiration Date | date |  |
| External ID | string |  |
| Note | text |  |
| Request Type | Service Type |  |
| OverruledEligibilityYN | boolean |  |
| Under MoratoriumYN | boolean |  |
| Service Operation Status | Service Operation Status Type |  |
| Moratorium Length | int |  |
| Request Origination | string |  |
