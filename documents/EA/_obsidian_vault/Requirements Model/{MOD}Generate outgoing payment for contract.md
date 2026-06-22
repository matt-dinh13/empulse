---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment"
domain: "Requirements Model"
element_id: 1878551
diagrams: 6
connections: 9
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Generate outgoing payment for contract

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment

## 📝 Notes

Input parameters: 

	
- contract
	
- payment type
	
- payment amount
	
- {ADD PAYM-580}payment channel - optional{/ADD}
	
- {ADD PAYM-1488 CBL-3570}
joint-lending partner code - optional
{/ADD}



System gets:
- Salesroom according to the rule Get salesroom by operation, passed is Contract and operation = CONTRACT_SIGNED
- Contract where Code = Outgoing Payment.contractCode


If Contract type != SAI and one of the condition is met:

	
- Salesroom.momentOfPayment = OCS
	
- Salesroom.momentOfPayment = RPC and Contract->Business Event contains a record where Type = CONTRACT_RECEIVING
	
- Salesroom.momentOfPayment = OCC and Contract.registrationStatus = R (Registred)

the system sets a variable readyForDisbursement = true.
Otherwise sets a variable readyForDisbursement = false. 

Creates a new Outgoing Payment object with attributes:

	
- Contract = reference to Contract
	
- Payment Type = payment type
	
- Amount = payment amount
	
- Creation Date = current date & time
	
- {ADD CBL-3001 PAYM-1012}Ready For Disbursement Date = 
--> If readyForDisbursement = true, Ready For Disbursement Date = current date & time
--> If readyForDisbursement = false, status = null
{/ADD}
	
- Payment Channel = {ADD PAYM-580} payment channel from input parameters, if not specified then {/ADD} reference to Contract.Payment Channel having Purpose = DI (Disbursement)
	
- Status = 
--> If readyForDisbursement = true, status = UNPAID
--> If readyForDisbursement = false, status = WAITING
	
- isBlocked = If Salesroom.Payment Status = BLOCKED OR Contract.Payment_Status = BLOCKED the system sets TRUE.
Otherwise false.

and if Contract.Contract Type = REL then sets following attributes on created Outgoing payment:

	
- if Payment Type = Payment To Retailer, then 
   Transaction Subtype = If any commodity on the contract is vehicle (Getting Commodity data rule with Contract->Contract 2 Commodity.Commodity ID, use Commodity -> Commodity Type.CommodityTypeFlag(IS_VEHICLE) = TRUE) then 'TW' else 'CD'


	
- if payment type = Cash loan disbursement, than

           Transaction Subtype = 'CL'
 

	
- Is Online Disbursement = Contract.Created Externally
	
- {ADD PAYM-1488 CBL-3570}
Joint-lending partner code = Joint-lending partner code
{/ADD}

## 🔗 Connections (8)

- ← Usage: [[05.099 Create outgoing payment via REST API]]
- → Dependency: [[Generate outgoing payment code]]
- → Dependency: [[REQ#2 Generate outgoing payments for REL transactions]]
- → Realisation: [[LOR-1662 Redirect LOR commodity functionality to Contract2Commodity]]
- → Dependency: [[REQ#1 Message ORDERPAY140]]
- → Dependency: [[Getting Commodity data rule]]
- ← Dependency: [[{MOD}05.098 Create outgoing payment on external request]]
- ← Dependency: [[{MOD}05.090 Generate outgoing payment for contract]]

## 📊 Appears In (6 diagrams)

- Custom: PAYM-1012 (CBL-3001) Ready for Disbursement Date Filter on Browse Outgoing Payment
- Custom: PAYM-1410 (CBL-3666) Standalone insurance
- Custom: PAYM-1488 (CBL-3570) - Joint lending support in Outgoing payments
- Custom: PAYM-5920 BRVN-331 UPDATE BANK ACCOUNT FOR SALESROOMS UNDER DISBURSEMENT LOCK
- Logical: OutgoingPaymentRestAPI
- Use Case: Generate and Cancel outgoing payments
