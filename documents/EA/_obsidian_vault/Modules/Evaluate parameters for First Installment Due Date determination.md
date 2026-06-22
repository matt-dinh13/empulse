---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1878432
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Evaluate parameters for First Installment Due Date determination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

Input:

	
- CUID
	
- Contract
	
- TemporaryApplication
	
- OfferFinancialParameters - structure stored in memory (before TemporaryApplication or Contract is created)


Output:

	
- PaymentChannelType
	
- PreferredDay
	
- PreviousContractDay


Set PaymentChannelType, PreferredDay, PreviousContractDay = NULL

// Evaluate PaymentChannelType and PreferredDay
If Contract is defined on input then
-- PaymentChannelType = Contract[Contract]->Payment_Channel[.Purpose='DI'].Type
-- PreferredDay = Contract[Contract]->Offer_Financial_Parameters.Preferred_Due_Day
--
else
-- If TemporaryApplication is defined on input then 
---- PaymentChannelType = Temporary_Application[TemporaryApplication]->TempAppl_Payment_Channel[.Purpose='DI'].Type
---- PreferredDay = Temporary_Application[TemporaryApplication]->Application2Offer[.Chosen=TRUE].Offer_Code->Offer_Financial_Parameters.Preferred_Due_Day
-- else
---- If OfferFinancialParameters is defined on input then te
------ PreferredDay = OfferFinancialParameters.PreferredDay

// Evaluate PreviousContractDay
If CUID is defined on input then
1) Find Contracts where
- client is identified by CUID from input
- contract status is Signed (N), Active (A), Paid-off (L)
- contract is not 
2) If found then select the first Contract with the highest number of remaining terms and set PreviousContractDay to the day of the next nearest installment due date of selected Contract.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}Evaluate First Installment Due Date]]
- ← Dependency: [[{MOD}Calculate product offer]]

## 📊 Appears In (2 diagrams)

- Custom: Calculate product offer
- Custom: First Installment Due Date for Application/Contract
