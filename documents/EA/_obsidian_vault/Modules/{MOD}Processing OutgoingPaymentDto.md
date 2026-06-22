---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2350 - OBS interface - Operations on contract (REL)"
domain: "Modules"
element_id: 1415459
diagrams: 5
connections: 7
tags:
  - requirement
  - modules
---

# 📋 {MOD}Processing OutgoingPaymentDto

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2350 - OBS interface - Operations on contract (REL)

## 📝 Notes

This business rule describes transformation outgoing payment (OutgoingPaymentDto) into comm table.

Input:

	
- CancelOutgoingPaymentRequest.outgoingPayment OR PaymentOrderRequest.outgoingPayment


{ADD PAYM-2148}
IF (OutgoingPaymentDto.paymentType == 'REW') THEN

- creates a record in the comm table TRANSAC150 with the following parameters: 

	
- Id = automatically generated unique identifier of the record


	
- IdCredit = according to the rule Get OBS contract identification, passed is OutgoingPaymentDto.contractCode


	
- SellerplaceCode =  OutgoingPaymentDto.sellerplaceCode
	
- TransacType = E (CEL rewards)


	
- TransValue = OutgoingPaymentDto.paymentAmount   ...negative amount if OutgoingPaymentDto.paymentStatus == 'C'


	
- DrawDate = OutgoingPaymentDto.orderCreationDate


	
- Timestamp = current
	
- IdResult190 = null
	
- ResultCode = null


{/ADD}


Algorithm:
IF (OutgoingPaymentDto.paymentType == 'PTR' OR 'CL' OR 'INS' OR 'RTC' OR 'ERF' {MOD PAYM-2148} OR 'REW' {/MOD}) THEN
System creates a record in the comm table ORDERPAY140 with the following parameters for each OutgoingPaymentDto:

	
- id_payout = OutgoingPaymentDto.paymentID


	
- id_orderpay_cancelled = IF (OutgoingPaymentDto.paymentStatus == 'C') THEN OutgoingPaymentDto.paymentID OTHERWISE NULL


	
- id_credit = according to the rule Get OBS contract identification, passed is OutgoingPaymentDto.contractCode
	
- type_orderpay =

        IF (OutgoingPaymentDto.paymentType == INS) THEN 'I'
        ELSE  IF (OutgoingPaymentDto.paymentType == RTC) THEN 'YT'
        {ADD PAYM-580} ELSE IF (OutgoingPaymentDto.paymentType == ERF) THEN 'G' {/ADD}
        {ADD PAYM-563} ELSE IF (OutgoingPaymentDto.paymentType == REW) THEN 'E' {/ADD}
        OTHERWISE
             IF (OutgoingPaymentDto.transactionSubtype == CD OR TW) THEN 'F' 
             ELSE IF (OutgoingPaymentDto.transactionSubtype == CL) THEN 'H' 
             ELSE IF (OutgoingPaymentDto.paymentType == PTR) THEN 'G'
             ELSE IF (OutgoingPaymentDto.paymentType == CL) THEN 'G'
            OTHERWISE NULL

	
- sellerplace_code = OutgoingPaymentDto.sellerplaceCode
	
- transfer_type =

        IF (OutgoingPaymentDto.paymentBA->BankAccountDto.isTechnicalAccount == TRUE) THEN 'k'
        OTHERWISE 'd'

	
- bankcode = OutgoingPaymentDto.paymentBA->BankAccountDto.bankCode
	
- num_account =

        IF (OutgoingPaymentDto.paymentBA->BankAccountDto.isTechnicalAccount == TRUE) THEN
        OutgoingPaymentDto.contractBA->BankAccountDto.accountNumber
        OTHERWISE OutgoingPaymentDto.paymentBA ->BankAccountDto.accountNumber

	
- num_tech_account =

        IF (OutgoingPaymentDto.paymentBA ->BankAccountDto.isTechnicalAccount == TRUE) THEN
        OutgoingPaymentDto.paymentBA ->BankAccountDto.accountNumber
        OTHERWISE NULL

	
- amount_pay = OutgoingPaymentDto.paymentAmount   ...negative amount if OutgoingPaymentDto.paymentStatus == 'C'
	
- date_due = OutgoingPaymentDto.orderCreationDate


	
- kbe =

        IF (OutgoingPaymentDto.paymentBA->BankAccountDto.isTechnicalAccount == TRUE) THEN '16'
        ELSE IF OutgoingPaymentDto.partnerLegalForm IS NULL THEN '19'
        OTHERWISE OutgoingPaymentDto.partnerLegalForm    ... trim on the first two characters

	
- beneficiary_name = OutgoingPaymentDto.recipientName
	
- beneficiary_number = OutgoingPaymentDto.recipientIdentificationNumber
	
- beneficiary_type =

        IF (OutgoingPaymentDto.paymentChannel == GBA) THEN 'c'
        IF (OutgoingPaymentDto.paymentChannel == PBA) THEN 'p'
        IF (OutgoingPaymentDto.paymentChannel == SBA) THEN 'p'
        OTHERWISE NULL

	
- bank_name =

        IF (OutgoingPaymentDto.paymentBA->BankAccountDto.isTechnicalAccount == TRUE) THEN
        OutgoingPaymentDto.contractBA->BankAccountDto.bankName
        OTHERWISE OutgoingPaymentDto.paymentBA ->BankAccountDto.bankName

	
- bank_number =

        IF (OutgoingPaymentDto.paymentBA->BankAccountDto.isTechnicalAccount == TRUE) THEN
        OutgoingPaymentDto.contractBA->BankAccountDto.bankNumber
        OTHERWISE OutgoingPaymentDto.paymentBA ->BankAccountDto.bankNumber

	
- time_stamp = current timedate

## 🔗 Connections (7)

- ← Dependency: [[Processing PaymentOrderRequest]]
- → Dependency: [[REQ#7 Translate contract codes to contract DB ID for migrated contracts]]
- → Dependency: [[REQ#1 Message ORDERPAY140 (closed-end loan and revolving loan)]]
- → Dependency: [[Get OBS contract identification]]
- ← Dependency: [[Processing CancelOugoingPaymentRequest]]
- → Association: [[REQ#1 Update of ORDERPAY140 message]]
- ← Dependency: [[OutgoingPaymentDto]]

## 📊 Appears In (5 diagrams)

- Custom: BRR-2350 - OBS interface - Operations on contract (REL)
- Custom: BRR-2996 - ChR - OBS interface - Updates in communication regarding payments
- Custom: BRR-570 - OBS interface - Outgoing payments
- Custom: Business rules
- Logical: Outgoing payments - Communication Model
