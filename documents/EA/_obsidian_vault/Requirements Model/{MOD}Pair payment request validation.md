---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-345 (CBL-1586) Interest calculation from Disbursement date"
domain: "Requirements Model"
element_id: 1741395
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Pair payment request validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-345 (CBL-1586) Interest calculation from Disbursement date

## 📝 Notes

Inputs:

	
- Contract contract
	
- PaymentPairingRequestTO request


Outputs:

	
- PaymentPairingResponseTO response


Algorithm:

	
- System checks if contract is null, if true, system sets response.ProcessingStatus to ERROR and response.Message to "Contract  contract.ContractCode not found"
	
- {ADD IS-345}System checks if contract has active installments, if true, system sets response.ProcessingStatus to ERROR and response.Message to "Installment schedule was not generated for the contract contract.ContractCode"{/ADD}
	
- System checks if request.TransactionId is null, if true, system sets response.ProcessingStatus to ERROR and response.Message to "TransactionId is null"
	
- System checks if request.DepositDate is null, if true, system sets response.ProcessingStatus to ERROR and response.Message to "Deposit date of payment was not found"
	
- System checks if request.Amount is null, if true, system sets response.ProcessingStatus to ERROR and response.Message to "Amount of payment was not found"
	
- System checks if request.Amount =< 0, if true, system sets response.ProcessingStatus to ERROR and response.Message to "Amount of payment is not positive"
	
- System checks if request.DepositDate > current date, if true, system sets response.ProcessingStatus to ERROR and response.Message to "Deposit date cannot be in the future"
	
- System checks if contract pairing is allowed for the contract using Contract pairing allowed , if false, system sets response.ProcessingStatus to ERROR and response.Message to "Contract pairing is not allowed"
	
- System checks if request.Amount.Currency is null OR currency of contract is different than request.Amount.Currency, if true, system sets response.ProcessingStatus to ERROR and response.Message to "Incoming payment currency is not the same as currency of the contract"
	
- System returns response

## 🔗 Connections (1)

- → Abstraction «trace»: [[REQ#1 Adding validations to all functionalities depending on existence of an installment schedule]]

## 📊 Appears In (2 diagrams)

- Custom: IS-345 (CBL-1586) Interest calculation from Disbursement date
- Use Case: OVERVIEW - Installment Schedule
