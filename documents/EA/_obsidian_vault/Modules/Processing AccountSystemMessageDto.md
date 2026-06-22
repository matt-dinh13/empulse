---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2352 - OBS interface - System messages (REL)"
domain: "Modules"
element_id: 816004
diagrams: 5
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Processing AccountSystemMessageDto

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2352 - OBS interface - System messages (REL)

## 📝 Notes

Input:

	
- AccountSystemMessageDto


Algorithm:
System creates a record in the comm table EVENT189 with the following parameters:

	
- Id = automatically generated unique identifier of the record
	
- EventType = according to the AccountSystemMessageDto.systemEventType:
- EOM_END -->RU_EOM_END
- otherwise error
	
- EventDate = AccountSystemMessageDto.currentDate
	
- EventValue1 = AccountSystemMessageDto.businessDate


	
- EventValue2 = null
	
- EventValue3 = null
	
- IdCredit = null
	
- IdResult190 = null
	
- ResultCode = null
	
- TimeStamp = current

## 🔗 Connections (2)

- ← Dependency: [[AccountSystemMessageDto]]
- ← Dependency: [[Processing MessageEnvelopeDto]]

## 📊 Appears In (5 diagrams)

- Custom: BRR-2352 - OBS interface - System messages (REL)
- Custom: COMMON for comm. with CaBus - Business rules
- Custom: REL System Messages - Business rules
- Logical: COMMON for comm. with CaBus - Communication Model
- Logical: System Messages - Communication model
