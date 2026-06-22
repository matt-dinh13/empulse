---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules"
domain: "Analysis Model"
element_id: 1610897
diagrams: 5
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 SN synchronization - Users

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules

## 📝 Notes

Input:
- Entity (synchronized entity, which contains User Type as part of synchronization message) 

System searches for the User (corresponding with User Type.Code) in BSL( (User).
If the User is not registered in BSL yet, system:

	
- sends a query to LDAP using the User Type.Code,
	
- if the query is successful, creates a record for the User in BSL using LDAP data; otherwise the algorithm ends with error.

System creates relation from Entity to the User.

If User Type.GroupAssistantNumber is defined then 
system sets User.User Setting.Value = User Type.GroupAssistantNumber 
for User.User Setting.UserSettingItem = GROUP_ASSISTANT_NUMBER.

## 🔗 Connections (2)

- ← Dependency: [[SNM User Synchronization]]
- ← Dependency: [[{MOD}SNM Partner and Salesroom Synchronization]]

## 📊 Appears In (5 diagrams)

- Custom: SNM Partner and Salesroom Synchronization
- Custom: SNM User Synchronization
- Custom: Synchronization of SNM data - original
- Logical: SNM Partner Synchronization
- Logical: SNM Salesroom Synchronization
