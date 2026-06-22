---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2358 - OBS interface - Incoming payments (REL)"
domain: "Modules"
element_id: 1224187
diagrams: 5
connections: 6
tags:
  - requirement
  - modules
---

# 📋 Processing PaidInstalmentMessageDto

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2358 - OBS interface - Incoming payments (REL)

## 📝 Notes

Input:

	
- PaidInstallmentMessageDto


Validations:

	
- system checks eligibility of passed PaidInstallmentMessageDto according to the rule Filter instalment messages, passed is:
- accountType = PaidInstallmentMessageDto.accountType 
- billingSystem = PaidInstallmentMessageDto.billingSystem 
- reconciliationType = PaidInstallmentMessageDto.reconciliationType 
If the rule returns false, the algorithm ends.


Algorithm:
System creates a record in the comm table INSTALPAY126 with the following parameters:

	
- Id = automatically generated unique identifier of the record
	
- IdPayment = PaidInstallmentMessageDto.paymetnIdentification->TransactionSourceIdDto.sourceTxId
	
- PaymentSource = according to the rule IncomingPaymentSourceSystem to HoSel value mapping, passed is PaidInstallmentMessageDto.paymetnIdentification->TransactionSourceIdDto.sourceSystem
	
- IdCredit =according to the rule Get OBS contract identification, passed is PaidInstallmentMessageDto.contractCode
	
- DatePay = PaidInstallmentMessageDto.paymentDepositDate
	
- IdInstallment = PaidInstallmentMessageDto.instalmentCode
	
- TypeInform = if PaidInstallmentMessageDto.cancelled = false, then I - Insert; otherwise C - Cancel
	
- ValuePay = PaidInstallmentMessageDto.pairedAmount   ...negative amount if PaidInstallmentMessageDto.cancelled = true
	
- TimeStamp = current
	
- IdResult190 = null
	
- ResultCode = null

## 🔗 Connections (5)

- ← Dependency: [[PaidInstallmentMessageDto]]
- ← Dependency: [[Processing MessageEnvelopeDto]]
- → Dependency: [[Filter instalment messages]]
- → Dependency: [[IncomingPaymentSourceSystem to HoSel value mapping]]
- → Dependency: [[REQ#1 INSTALPAY126]]

## 📊 Appears In (5 diagrams)

- Custom: BRR-2358 - OBS interface - Incoming payments (REL)
- Custom: COMMON for comm. with CaBus - Business rules
- Custom: Incoming payments - Business rules
- Logical: COMMON for comm. with CaBus - Communication Model
- Logical: REL Payment Pairing - Communication Model
