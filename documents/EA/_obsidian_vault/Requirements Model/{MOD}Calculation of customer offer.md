---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9195 Top Up New Product Set Up - Loan Origination/LOR-9436 Calculate offer for TopUp"
domain: "Requirements Model"
element_id: 1820658
diagrams: 4
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Calculation of customer offer

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9195 Top Up New Product Set Up - Loan Origination/LOR-9436 Calculate offer for TopUp

## 📝 Notes

Parameters of CalculateCustomerOffer request for calculation of customer offers:

Commodity

	
- code = identifier from commodity module


Base

	
- salesroomCode = code of salesroom where the offer is calculated
	
- salesAgentCode = code of agent who calculates the offer
	
- requiredLoanAmount
	
- requiredExtraLimit = plus extra limit
	
- maximalMonthlyPayment = maximum monthly payment
	
- maximalCashPayment = maximal cash payment
	
- loanOptionCode = selected product type (debit card is not supported yet)
	
- currency =  currency
	
- CUID = initial cuid or cuid of client
	
- clientDocumentTypes = document types based on selection on UI


	
- campaignID = null
	
- businessChannel = null
	
- boundOfferCode = segment code
	
- offerID = marketing_offer_id
	
- requiredAnnnualInterestRate = Annual interest rate
	
- requiredTerms = Number Of Terms
	
- serviceTypeCode = Service Type of service which is defined for SAI product
	
- cardType = Debit Card Type
	
- productSets = selected product sets


ServiceTypePreference

	
- preference = preference service type preference
	
- type = service type


QualificationCriteria

	
- QualificationCriteria = based on calling of use case 01.013 Collect real offer qualification criteria


Top Up service related

	
- overlapPeriod = number of {DEL LOR-10191}months to{/DEL} {ADD LOR-10191}installments to be{/ADD} postpone installment schedule
	
- prefferredDueDay = number of day in month for calculating due date
	
- contractNumber = contract related to previous contract



Structured parameters

	
- loan purpose = parameterType=LIMIT_VALUE, code=PUR, value=code of selected item

## 🔗 Connections (1)

- ← Dependency: [[01.010 Choose product offer (UseCase 1827711)]]

## 📊 Appears In (4 diagrams)

- Custom: LOR-9436 Calculate offer for TopUp
- Custom: LOR-9529 Calculator: field Loan purpose
- Custom: LOR-9923 Late Top Up - Remove the logic comparing date when calculating overlap period
- Use Case: Choose product offer
