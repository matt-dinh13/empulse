---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2352 - OBS interface - System messages (REL)"
domain: "Modules"
element_id: 1223734
diagrams: 9
connections: 8
tags:
  - requirement
  - modules
---

# 📋 Processing MessageEnvelopeDto


> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2352 - OBS interface - System messages (REL)

## 📝 Notes

Input:

	
- MessageEnvelopeDto


Algorithm:
System performs processing of each message included in MessageEnvelopeDto by one of the following rule according to the type of included messages:

	
- for AccountSystemMessageDto - Processing AccountSystemMessageDto
	
- for TransactionMessageDto - Processing TransactionMessageDto
	
- for InstalmentMessageDto - Processing InstalmentMessageDto
	
- for PaidInstalmentMessageDto - Processing PaidInstalmentMessageDto
	
- for AccruedInterestMessageDto - Processing AccountSystemMessageDto

## 🔗 Connections (8)

- ← Dependency: [[REQ#1 Basic infrastructure for communication with CaBus]]
- ← Dependency: [[MessageEnvelopeDto]]
- → Dependency: [[REQ#1 Message INSTALMENT125]]
- → Dependency: [[Processing PaidInstalmentMessageDto]]
- → Dependency: [[Process AccruedInterestMessageDto]]
- → Dependency: [[Processing InstalmentMessageDto]]
- → Dependency: [[Processing AccountSystemMessageDto]]
- → Dependency: [[Processing TransactionMessageDto]]

## 📊 Appears In (9 diagrams)

- Custom: BRR-2352 - OBS interface - System messages (REL)
- Custom: BRR-2353 - OBS interface - Installment schedule (REL)
- Custom: COMMON for comm. with CaBus - Business rules
- Logical: COMMON for comm. with CaBus - Communication Model
- Logical: REL Account Transactions - Communication model
- Logical: REL Accured Interest - Communication model
- Logical: REL Installment schedule - Communication model
- Logical: REL Payment Pairing - Communication Model
- Logical: System Messages - Communication model
