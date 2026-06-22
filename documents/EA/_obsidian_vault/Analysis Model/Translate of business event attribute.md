---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Business events/Business rules"
domain: "Analysis Model"
element_id: 1834358
diagrams: 3
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Translate of business event attribute

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Business events/Business rules

## 📝 Notes

This business rule describes how a BusinessEventAttribute is translated (for GUI).

Input:

	
- BusinessEventAttribute


Algorithm:

	
- system creates a string LocalizedType as a localized value of BusinessEventAttribute.type
	
- if BusinessEventAttribute.type -> BusinessEventAttributeType.dataType = String, then 
LocalizedValue = BusinessEventAttribute.value
	
- if BusinessEventAttribute.type -> BusinessEventAttributeType.dataType = JavaEnum, then 
- system finds an dataType defined in BusinessEventAttributeType.enumeration (accoring to a name of class) 
- system finds a dataType.value which matches BusinessEventAttributeType.value 
LocalizedValue = localized text of the found dataType.value


	
- if BusinessEventAttribute.type -> BusinessEventAttributeType.dataType = DB Enum, then 
- system finds a DB enumeration defined in BusinessEventAttributeType.enumeration (accoring to a name of class) 
- system finds a DB enumeraion.value which matches BusinessEventAttributeType.value 



Output:

	
- computed string LocalizedType + " = " + LocalizedValue. 
If any error occurs during searching, a text CON_WrongBusinessEventAttribute is used instead of the computed string.


Example 1:

	
- BusinessEventAttribute.type = CARD_NUMBER
	
- BusinessEventAttribute.value = 123456798
	
- BusinessEventAttributeType where Code = CARD_NUMBER has
- DataType = String
	
- BusinessEventAttribute.value is not translated and it is used directly on GUI


Example 2:

	
- BusinessEventAttribute.type = CARD_CANCELATION_FAIL_REASON


	
- BusinessEventAttribute.value = CARD_NOT_FOUND


	
- BusinessEventAttributeType where Code = CARD_CANCELATION_FAIL_REASON has
- DataType = Enumeration
- Enumeration = CardOperationFailReasonType
	
- as a localization key is used the key for translation for the record CardOperationFailReasonType.CARD_NOT_FOUND
(if a record ActivateCardResultCode.CARD_NOT_FOUND does not exist, a text CON_WrongBusinessEventAttribute is used instead of the localization key above)


Example 3:

	
- BusinessEventAttribute.type = SPECIAL_PENALTY_EVENT_REASON


	
- BusinessEventAttribute.value = LOST_PAYMENT_FOUND


	
- BusinessEventAttributeType where Code = SPECIAL_PENALTY_EVENT_REASON has
- DataType = DB Enum
- Enumeration = IncomingPaymentPairingReason

as a localization key is used the key for record IncomingPaymentPairingReason.LOST_PAYMENT_FOUND

## 🔗 Connections (3)

- ← Dependency: [[Business events (Class 1612876)]]
- ← Dependency: [[Business events (Class 1655506)]]
- ← Dependency: [[08.057 Perform Partial early repayment (UseCase 1868459)]]

## 📊 Appears In (3 diagrams)

- Custom: Business events - Business rules
- Custom: Tab - Application information
- Custom: Tab-Contract information
