---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF"
domain: "Requirements Model"
element_id: 1335466
diagrams: 2
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 Get contact from CIF

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7585 (CLM-2727) Use REST API in communication with CIF

## 📝 Notes

Input:
cuid

Output:
mobilePhone
titleBefore
titleAfter 
firstName
surname
middleName 
gender
 

	
- System calls CIF via PartyWS.customerPersonGet with following parameters:
- externalID = cuid
- projections = PARTY_DATA
	
- If the calling timeouts or ends with error, system:
- logs error a message MSG_SendSMSCIFError (e.g. An SMS to clients primary mobile cannot be sent due to technical error.)
	
- Based on response from CIF, the system sets:

        - mobilePhone = partyRole -> phoneNumber.number where abstractContact.classification = PRIMARY_MOBILE
        - titleBefore = person -> honourBeforeName
        - titleAfter = person -> honourAfterName
        - firstName = person -> firstName
        - surname = person -> lastName
        - middleName = person -> middleName
        - gender = person -> gender
4.     Return all values

## 🔗 Connections (2)

- → Dependency: [[CIF (Actor 1880899)]]
- ← Dependency: [[03.702 Compose and send notification message]]

## 📊 Appears In (2 diagrams)

- Custom: Overview
- Use Case: SMS notification
