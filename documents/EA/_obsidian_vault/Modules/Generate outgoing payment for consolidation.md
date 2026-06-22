---
type: Requirement
stereotype: "FunctionalRequirement"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/CBL/CBL-817 - Change to BSL and CBSA module by consolidation process"
domain: "Modules"
element_id: 1224185
diagrams: 4
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Generate outgoing payment for consolidation

> **Type**: Requirement · **Stereotype**: «FunctionalRequirement»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/CBL/CBL-817 - Change to BSL and CBSA module by consolidation process

## 📝 Notes

This business rule describes transformation from artificial incoming payment to technical outgoing payment.

Input:

	
- ArticifialIncomingPaymentRequest where paymentType = CONSOLIDATION


Algorithm:

System gets a record from FakeSalesroom table where Active = true and Usage = CONS.
If no such a record is found, the system logs an error and ends.

System creates a record in the comm table ORDERPAY140 with the following parameters:

	
- id_payout = ArticifialIncomingPaymentRequest.paymentDataExchangeID


	
- id_orderpay_cancelled = IF (ArticifialIncomingPaymentRequest.typeOfOperation== 'CANCEL') THEN ArticifialIncomingPaymentRequest.paymentDataExchangeID OTHERWISE NULL


	
- id_credit = according to the rule Get OBS contract identification, passed is ArticifialIncomingPaymentRequest.paymentDataExchangeID.contractCode
	
- type_orderpay = K (Consolidation)


	
- sellerplace_code = FakeSalesroom.code
	
- transfer_type = 'd'


	
- bankcode = FakeSalesroom.bankCode
	
- num_account = FakeSalesroom.bankAccountNumber
	
- num_tech_account = null


	
- amount_pay = ArticifialIncomingPaymentRequest.amount   ...negative amount if ArticifialIncomingPaymentRequest.typeOfOperation== 'CANCEL'
	
- date_due = current date


	
- kbe = FakeSalesroom.kbe


	
- beneficiary_name = FakeSalesroom.name
	
- beneficiary_number = FakeSalesroom.bin
	
- beneficiary_type = 'p'


	
- bank_name =FakeSalesroom.bankNme


	
- bank_number = FakeSalesroom.bankAccountNumber


	
- time_stamp = current timedate

## 🔗 Connections (2)

- ← Dependency: [[REQ#4 ORDERPAY140 for consolidation processing]]
- ← Dependency: [[Processing ArtificialIncomingPaymentRequest]]

## 📊 Appears In (4 diagrams)

- Custom: CBL-817 - Change to BSL and CBSA module by consolidation process
- Custom: Incoming payments - Business rules
- Logical: Outgoing payments - Communication Model
- Logical: Processing Incoming Payments - Communication Model
