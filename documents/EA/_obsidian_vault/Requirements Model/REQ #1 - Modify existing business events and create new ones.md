---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9080 (CLM-2847) [VN NASA] Modification of BusinessEvents from CMSG"
domain: "Requirements Model"
element_id: 1688726
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Modify existing business events and create new ones

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9080 (CLM-2847) [VN NASA] Modification of BusinessEvents from CMSG

## 📝 Notes

Modify following events:
business event CARD_PIN_GENERATION_SUCCESSFUL

	
- add attribute SYSTEM (DataType = String, Enumeration = null)


business event CARD_PIN_GENERATION_FAILED

	
- modify attribute CARD_PIN_GENERATION_FAILED_REASON (add enumeration item UNSUCCESSFUL_CHANGE_THROUGH_ATM to enumarations CardOperationFailedReasonType and CardOperationFailedReasonType)


Create following events:
business event CARD_INITIAL_PIN_GENERATION

	
- attribute CARD_NUMBER
	
- attribute CARD_INITIAL_PIN_STATUS = SUCCESS/FAIL


business event CARD_PIN_SMS_DELIVER (triggered not by CMSG, but by local app SSMT)

	
- attribute CARD_NUMBER
	
- attribute CARD_PIN_SMS_DELIVER_STATUS = SUCCESS/FAIL

## 📊 Appears In (1 diagrams)

- Custom: CBL-9080 (CLM-2847) [VN NASA] Modification of BusinessEvents from CMSG
