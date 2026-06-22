---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules"
domain: "Analysis Model"
element_id: 1610887
diagrams: 3
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Algorithm:Synchronization of SN object

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules

## 📝 Notes

- If the entity was already synchronized within the current loop of the synchronization (i.e. system received more notifications for the same object):
- system sets the status of notification to 'Skipped'(S) and continues with the next notification of the same type (if available).
	
- System prepares a synchronization request GetEntityDataRequest containing code of object to be synchronized (obtained from the notification) and calls corresponding method of web service ProvideSnmDataWS (HomeSIS):
- GetSalesroomData
- GetPartnerData
- GetUserData
If system does not receive a response:
- system sets the status of notification to 'Error'(E), records error description and continues with the next notification of the same type (if available).
	
- System checks the data received via web service (message) according to the rule SNM synchronization - validation rules. 
If the rules are not satisfied then system sets the status of notification to 'Error'(E), records error description and continues with the next notification of the same type (if available).
	
- For a Partner or Salesroom the system does the synchronization according to the rule SNM Partner and Salesroom Synchronization.
	
- For a user the system does the synchronization according to the rules Synchronization of SN User data.
	
- If a step of the synchronization cannot be completed successfully, system sets the status of notification to 'Error'(E), records error description and continues with the next notification of the same type (if available).
	
- System continues with the next notification of the same type (if available).

## 🔗 Connections (6)

- → Dependency: [[SNM User Synchronization]]
- → Generalization: [[REQ#1 Message SELLERPLACE130 (Boundary 1610899)]]
- → Dependency: [[{MOD}SNM Partner and Salesroom Synchronization]]
- → Dependency: [[SNM synchronization - validation rules]]
- → Association: [[REQ 1 (BSL-CS)_ Add a links between User and its Supervisors to the SNM synchronization]]
- ← Dependency: [[09.901 Process SNM synchronization (UseCase 1848130)]]

## 📊 Appears In (3 diagrams)

- Custom: SNM Synchronization
- Custom: Synchronization of SNM data - original
- Use Case: Synchronization of SNM data
