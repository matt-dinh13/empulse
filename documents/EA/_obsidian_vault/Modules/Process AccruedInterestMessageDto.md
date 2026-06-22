---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Business rules"
domain: "Modules"
element_id: 1223743
diagrams: 4
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Process AccruedInterestMessageDto

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/COMMON for communication with CaBus/Business rules

## 📝 Notes

Input:

	
- AccruedInterestMessageDto


Algorithm:
System creates a record in the comm table ACCRUEDINTEREST162 with the following parameters:

	
- Id = automatically generated unique identifier of the record
	
- Id_AccruedInterest = AccruedInterestMessageDto.accruedInterestCode


	
- IdCredit = according to the rule Get OBS contract identification, passed is AccruedInterestMessageDto.contractCode
	
- Billing_date = AccruedInterestMessageDto.valueDate
	
- Amount = AccruedInterestMessageDto.amount


	
- TypeInform = if AccruedInterestMessageDto.cancelled = false, then I (Insert); else C (Cancel)
	
- CancellationReason = according to the TransactionMessageDto.cancellationReason:
- CancellationReasonDto.REVERSAL --> REVERSAL
- CancellationReasonDto.RECALCULATION --> RECALCULATION 
- CancellationReasonDto.TRANSFER_BACK_TO_CARD --> TRANSFER_BACK_TO_CARD
- CancellationReasonDto.CHARGEBACK --> CHARGEBACK 
- CancellationReasonDto.COLLING_OFF --> COLLING_OFF
- CancellationReasonDto.IP_CANCEL --> IP_CANCEL
- else --> null


	
- Timestamp = current
	
- IdResult190 = null


	
- ResultCode = null

## 🔗 Connections (2)

- ← Dependency: [[Processing MessageEnvelopeDto]]
- ← Dependency: [[AccruedInterestMessageDto]]

## 📊 Appears In (4 diagrams)

- Custom: COMMON for comm. with CaBus - Business rules
- Custom: REL Account Messages - Business rules
- Logical: COMMON for comm. with CaBus - Communication Model
- Logical: REL Accured Interest - Communication model
