---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1627480
diagrams: 5
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Set payment status for Salesroom to Allowed

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants

## 📝 Notes

Inputs:

	
- Salesroom


Steps:

	
- System checks if related partner's payment status is set to allowed (i.e. Salesroom->Partner.Payment_Status = 'Allowed)'. If not, this algorithm is terminated.
	
- System sets salesroom's payment status to allowed (Salesroom.Payment_Status = 'Allowed')
	
- System performs the unblocking payments according to the rule Unblocking outgoing payments for salesroom

## 🔗 Connections (5)

- ← Dependency: [[09.260 Activate salesroom manually]]
- ← Dependency: [[09.215 Set payment status for Salesroom manually (UseCase 1387405)]]
- ← Dependency: [[SN synchronization - Payment status]]
- → Dependency: [[Unblocking outgoing payments for salesroom]]
- → Dependency: [[REQ#1 Changes in (un)blocking payments for saleroom]]

## 📊 Appears In (5 diagrams)

- Custom: Salesroom Management -  business Rules
- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
- Use Case: Change Salesroom status
- Use Case: Manage salesroom
