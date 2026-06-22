---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules"
domain: "Analysis Model"
element_id: 1854275
diagrams: 6
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Create incoming payment rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Incoming payments/Management of incoming payments /Business Rules

## 📝 Notes

Input:

	
- ContractCode    ...optional
	
- Amount
	
- Type


	
- DepositDate   ...optional
	
- PaymentChannel    ...optional, record OTHER from enumeration Incoming Payment Channel


	
- DataExchangeID    ..optional
	
- TransactionNumber    ..optional, null if it is not provided


	
- Purpose   ...optional, OTHER if it is not provided
	
- Description .. optional
	
- SourceSystem .. optional, BSL if it is not provided
	
- TransactionDate    ...optional, DepositDate is used if it is not provided

                     if TransactionTime is provided, time will be send along  with TransactionDate

	
- ChannelBranch   ...optional
	
- PayerBankAccountNumber   ...optional
	
- PayerName  ...optional
	
- PaymentPersonalNumber   ...optional
	
- BankAccount  ...optional


If the DataExchangeID has not been provided, the system generates the DataExchangeID as an unique identifier of the incoming payment across the systems (not DB ID).

System creates an Incoming Payment with attributes:

	
- Incoming Payment amount = Amount
	
- Incoming Payment Type = Type
	
- Incoming Payment Status = Active (A)
	
- Creating date = current date and time
	
- Deposit date = DepositDate
	
- Pairing status = Unpaired (U)
	
- Provided Contract Number = ContractCode
	
- Payment channel = PaymentChannel
	
- TransactionNumber = TransactionNumber
	
- DataExchangeID = DataExchangeID


	
- Transaction date = TransactionDate + TransactionTime
	
- Description= Description


	
- SourceSystem = SourceSystem


	
- TransactionDate = TransactionDate
	
- ChannelBranch = ChannelBranch
	
- PayerBankAccountNumber = PayerBankAccountNumber
	
- PayerName = PayerName
	
- PaymentPersonalNumber = PaymentPersonalNumber
	
- BankAccount = BankAccount


	
- Charging date = DepositDate


And if the payment type is one of the following:

	
- Small underpayment (SU)
	
- Gift payment (GP)
	
- Deficits and damages (DAD)
	
- Contract sale (CS)
	
- Receivable from partners (RFP)
	
- Consolidation (CONS)
	
- Reward payment (REW)

then the system generates a system event InternalIncomingPaymentSE with a the following parameters:

	
- created IncomingPayment object
	
- Purpose
	
- typeOfOperation = CREATE

## 🔗 Connections (4)

- ← Dependency: [[01.901 Perform contract sale (UseCase 1839170)]]
- ← Dependency: [[01.730 Finish contract manually (UseCase 1852803)]]
- ← Dependency: [[{MOD}08.280 Check and process CET request]]
- ← Dependency: [[{MOD}08.210 Check and process Gift payment]]

## 📊 Appears In (6 diagrams)

- Custom: Business Rules
- Custom: CBL-10294 - Write-off and pay-off
- Use Case: Contract Early Termination processing
- Use Case: Contract sale
- Use Case: Gift payment processing
- Use Case: Process batch of incoming payment processing requests
