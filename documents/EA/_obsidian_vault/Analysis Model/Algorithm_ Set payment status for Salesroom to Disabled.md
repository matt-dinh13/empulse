---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants"
domain: "Analysis Model"
element_id: 1627469
diagrams: 7
connections: 7
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm: Set payment status for Salesroom to Disabled

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/COMMON for Salesroom/Business Rules/Common for all variants

## 📝 Notes

Inputs:

	
- Salesroom


Steps:

	
- System sets the salesroom's payment status to "Disabled", i.e. Salesroom.Payment_Status = 'Disabled'
	
- System performs the blocking payments according to the rule Blocking outgoing payments for salesroom

## 🔗 Connections (7)

- ← Dependency: [[09.215 Set payment status for Salesroom manually (UseCase 1387405)]]
- ← Dependency: [[09.350 Move salesroom (UseCase 1387391)]]
- ← Dependency: [[SN synchronization - Payment status]]
- → Dependency: [[REQ#1 Changes in (un)blocking payments for saleroom]]
- → Dependency: [[Blocking outgoing payments for salesroom]]
- ← Dependency: [[Algorithm_ Set salesroom's status to 'Closed']]
- ← Dependency: [[09.210 Set payment status for Partner manually (UseCase 1637268)]]

## 📊 Appears In (7 diagrams)

- Custom: Salesroom Management -  business Rules
- Custom: SNM Partner and Salesroom Synchronization
- Custom: Synchronization of SNM data - original
- Use Case: Change Partner status
- Use Case: Change Salesroom status
- Use Case: Manage partner
- Use Case: Manage salesroom
