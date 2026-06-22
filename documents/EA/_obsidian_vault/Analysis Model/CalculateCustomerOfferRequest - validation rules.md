---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case"
domain: "Analysis Model"
element_id: 1825187
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 CalculateCustomerOfferRequest - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Product Offer Calculation/Use Case

## 📝 Notes

// Validation of request for product offer calculation
// returned resultCode code is in bracket

Output:
- resultCode

CalculateCustomerOfferRequest.Commodity
Group A

	
- type
If minimal 2 commodities are on input then All commodity type must be compliant with all defined Commodity type criterions {ADD}Commodity type criterion check (type, price) [INVALID_COMMODITYTYPE_COMBINATION]
	
- price
price > 0 [INVALID_COMMODITYPRICE]
	
- manufacturer
Optional
	
- model
Optional
Maximum of 50 characters
[INVALID_MODEL]
	
- SKU

Group B

	
- code
	
- insure


Attributes from group A and group B cannot be on input together [INVALID_COMMODITY_DATA]

CalculateCustomerOfferRequest

	
- salesroomCode
Mandatory
Exists Salesroom(S) active salesroom in HSIS [INVALID_SALESROOM]
If checkUserAssignedToSalesroom is true then following check is performed:If doesnt exists Sales agent(SA) Current user is assigned as sales agent to the Salesroom [NOT_SALESROOMUSER]
	
- salesAgentCode or user based on Get User based on SSO token
Optional
- Exists Sales agent(SA) where SA.Code = salesAgentCode and SA.Status = Active(A)
- and sales agent is assigned to the salesroom (If checkUserAssignedToSalesroom is true)
[NOT_SALESROOMUSER]
	
- loanOptionCode
Mandatory
Exists Loan Option(LO) where LO.Code = loanOptionCode 
[INVALID_LOAN_OPTION]
	
- currency
Mandatory
Exists Currency(C) where C.Code = currencyCode 
[INVALID_CURRENCY]
	
- requiredLoanAmount
Mandatory for loanOptionCode = CASH_LOAN or REL_NON_INI
requiredLoanAmount >= 0 
[INVALID_LOAN_AMOUNT]
	
- requiredExtraLimit
Optional
requiredExtraLimit >= 0 
[INVALID_EXTRA_LIMIT]
	
- maximalCashPayment
Mandatory for loanOptionCode = POS_LOAN
maximalCashPayment >= 0 and maximalCashPayment < TotalPrice (sum of Commodity.Price for all commodities)
[INVALID_MAXCASHPAYMENT]
	
- maximalMonthlyPayment
maximalMonthlyPayment > 0 
[INVALID_MAXMONTHLYPAYMENT]
	
- clientDocumentTypes (optional)
Exists Document Type (DT) where DT.Code = clientDocumentTypes and DT.DocumentTypeFlag = PERSON and DT.Active = True 
[INVALID_DOCUMENTTYPE]
	
- commodities 
Mandatory for loanOptionCode = POS_LOAN or SA_INS
[MISSING_COMMODITY]


	
- serviceTypeCode
Mandatory for loanOptionCode = SA_INS
Exists Service Type(ST) where ST.Code = serviceTypeCode [INVALID_SERVICETYPE]
	
- cardType
Mandatory for loanOptionCode = DEBIT_CARD
[MISSING_CARD_TYPE]
	
- requiredTerms

        requiredTerms <1,99>
        [INVALID_TERMS]

	
- requiredAnnualInterestRate
requiredAnnulInterestRate >0
[INVALID_ANNUAL_INTEREST_RATE]
	
- maxNumberOfInstallments
maxNumberOfInstallments <= PartyOffers.Offer.maxTenor
[MOFFER_MAXNUMOFINSTALLMENTS_EX]
	
- {ADD TFT-16394}qualificationCriteria

        if only type without value is sent = [MISSING_QUALIFICATION_CRITERIA_VALUE]
        if only value without type is sent = [MISSING_QUALIFICATION_CRITERIA_CODE] {/ADD}

CalculateCustomerOfferRequest.ServiceTypePreference

	
- type
Exists Service Type (ST) where ST.Code = serviceTypePreferences.type
[INVALID_SERVICETYPE]

## 🔗 Connections (2)

- ← Dependency: [[02.820 Calculate Product Offers for External system (UseCase 1820901)]]
- → Dependency: [[Get User based on SSO token]]

## 📊 Appears In (1 diagrams)

- Use Case: Product Calculator for External system - Calculate/Recalculate
