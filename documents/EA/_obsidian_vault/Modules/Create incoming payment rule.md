---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/Business Rules"
domain: "Modules"
element_id: 1671786
diagrams: 5
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Create incoming payment rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/Business Rules

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
	
- SourceSystem .. optional, INC_PAY if it is not provided
	
- TransactionDate    ...optional, DepositDate is used if it is not provided
	
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


	
- Transaction date = TransactionDate  
	
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

then the system generates a system event InternalIncomingPaymentSE with a the following parameters:

	
- created IncomingPayment object
	
- Purpose
	
- typeOfOperation = CREATE

## 🔗 Connections (3)

- ← Dependency: [[05.194 Process ArtificialIncomingPaymentRequest notification]]
- ← Dependency: [[{MOD}05.380 Create incoming payment on local request]]
- ← Dependency: [[05.361 Create incoming payment on external request (UseCase 1855364)]]

## 📊 Appears In (5 diagrams)

- Custom: Business Rules
- Use Case: Creating incoming payment on internal component request
- Use Case: Creation incoming payment on external request
- Use Case: Import incoming payments
- Use Case: Process notifications from other systems
