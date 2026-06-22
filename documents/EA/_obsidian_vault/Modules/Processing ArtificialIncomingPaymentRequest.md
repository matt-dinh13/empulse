---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2205 - OBS interface - Operations on contract (CEL)"
domain: "Modules"
element_id: 1224190
diagrams: 4
connections: 7
tags:
  - requirement
  - modules
---

# 📋 Processing ArtificialIncomingPaymentRequest

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2205 - OBS interface - Operations on contract (CEL)

## 📝 Notes

Input:

	
- ArticifialIncomingPaymentRequest


Algorithm:
System creates a record in the comm table REQUESTPAYMENT135 with the following parameters:

	
- Id = automatically generated unique identifier of the record
	
- Id payment = ArticifialIncomingPaymentRequest.paymentDataExchangeId
	
- Amount = ArticifialIncomingPaymentRequest.amount  ...negative amount if ArticifialIncomingPaymentRequest.typeOfOperation = CANCEL


	
- IdContract = according to the rule Get OBS contract identification, passed is ArticifialIncomingPaymentRequest.contractCode


	
- Payment type = according to the ArticifialIncomingPaymentRequest.paymentType:
- DEFICITS_AND_DAMAGES -->DAD
- GIFT_PAYMENT --> GP
- SMALL_UNDERPAYMENT --> SU
- CONTRACT_SALE --> CS
- RECEIVABLE_FROM_PARTNER --> RFP
- CONSOLIDATION --> CONS
- REWARDS --> REW
	
- Purpose = according to the ArticifialIncomingPaymentRequest.paymentPurpose:
- CONTRACT_SALE --> CS
- WRITE-OFF --> WO
- OTHER --> O


	
- TypeInform = if ArticifialIncomingPaymentRequest.typeOfOperation = CREATE, then I (Insert); else C (Cancel)
	
- Source = according to the rule IncomingPaymentSourceSystem to HoSel value mapping, passed is ArticifialIncomingPaymentRequest.sourceSystem


	
- Time stamp = current
	
- Result code = null
	
- Id result190 = null



If ArticifialIncomingPaymentRequest.paymentType = CONSOLIDATION, system creates a record in ORDERPAY140 by rule Generate outgoing payment for consolidation

## 🔗 Connections (7)

- ← Dependency: [[ArtificialIncomingPaymentRequest]]
- → Dependency: [[REQ#2 Update message REQUESTPAYMENT135]]
- → Dependency: [[REQ#7 Translate contract codes to contract DB ID for migrated contracts]]
- → Dependency: [[IncomingPaymentSourceSystem to HoSel value mapping]]
- → Dependency: [[Get OBS contract identification]]
- → Dependency: [[REQ#1 Message REQUESTPAYMENT135]]
- → Dependency: [[Generate outgoing payment for consolidation]]

## 📊 Appears In (4 diagrams)

- Custom: BRR-2205 - OBS interface - Operations on contract (CEL)
- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
- Custom: Incoming payments - Business rules
- Logical: Processing Incoming Payments - Communication Model
