---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Business Rules"
domain: "Analysis Model"
element_id: 1818738
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Update limit

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Business Rules

## 📝 Notes

1. System constructs the request to Offer store as follows:

Limits.*

	
- partyId = Client.CUID
	
- limitBulkId = Contract.Code
	
- limitScoringProcessSource = constant 'UW'


	
- flagEligibility = value of fullpath outputData.onlineRBP.flagEligibility
	
- calculationSource = based on the result of evaluation process (APPLICATION_APPROVED or APPLICATION_REJECTED or APPLICATION_CANCELED)


for each record in array fullpath outputData.onlineRBP.offers[]
Limit.*

	
- limitValidFrom = value of fullpath outputData.onlineRBP.offers[].validFrom


	
- limitValidTo = value of fullpath outputData.onlineRBP.offers[].validTo
	
- limitScore = value of fullpath outputData.onlineRBP.offers[].scoreFinal
	
- amtCreditMax = value of fullpath outputData.onlineRBP.offers[].maximalCreditAmount
	
- amtInstalmentMax = value of fullpath outputData.onlineRBP.offers[].maximalMonthlyInstallment
	
- amtDownPaymentMin = value of fullpath outputData.onlineRBP.offers[].minimalCashPayment
	
- codeRiskGrade = value of fullpath outputData.onlineRBP.offers[].riskGrade
	
- limitAccuracy = value of fullpath outputData.onlineRBP.offers[].limitAccuracy
	
- limitPilotCode = value of fullpath outputData.onlineRBP.offers[].limitPilotCode
	
- limitTypeCode = value of fullpath outputData.onlineRBP.offers[].limitType
	
- limitSubTypeCode = value of fullpath outputData.onlineRBP.offers[].limitSubType
	
- acqChannelCodes = value of fullpath outputData.onlineRBP.offers[].acquisitionChannels
	
- maxTenor= value of fullpath outputData.onlineRBP.offers[].maxTenor


2. System sends the request using Limits/POST.
3. System continues no matter what the response is.

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
