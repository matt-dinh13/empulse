---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Installment Schedule Dates/CEL/Business rules"
domain: "Modules"
element_id: 1533902
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get configuration for First Installment Due Date calculation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Installment Schedule Dates/CEL/Business rules

## 📝 Notes

// This algorithm finds configuration for evaluation of First Installment Due Date for CEL products 

Input:

	
- PreferredAlgorithmMethod
	
- ProductProfile
	
- PaymentChannelType


Output: 
// Meaning of output values is described in the rule Calculate First Installment Due Date 

	
- DayShift


	
- FastDueDate


	
- DueDaysMap


	
- EOMSpread 


	
- MinDaysAfterLoanProvidingDate


	
- MaxDaysAfterLoanProvidingDate


	
- MinDaysAfterPreferredDay 


	
- AddDeferredPeriodToResult 


// Find the key values for selection of parameters from the definition set

PreferredDueDayKey = GlobalParameter.PreferredDueDayKey

// Evaluate Segment
Segment = '0'
If PreferredDueDayKey = PAYMENT_CHANNEL_TYPE and PaymentChannelType is defined on input then Segment = PaymentChannelType from input
If PreferredDueDayKey = PRODUCT_TYPE and ProductType is defined on input then Segment = ProductProfile.ProductType from input

// Select parameters from the definition set
Record is found in Due Date Algorithm Parameters (Parameters) entity as follows:

	
- If ProductProfile is defined on input then search for the first record where 
- Parameters.ProductProfile = ProductProfile from input
- Parameters.Segment = Segment
- Parameters.PreferredAlgorithmMethod = PreferredAlgorithmMethod from input 
	
- If not found then search for the first record where 
- Parameters.ProductProfile is empty (not defined)
- Parameters.Segment = Segment
- Parameters.PreferredAlgorithmMethod = PreferredAlgorithmMethod from input
	
- If not found then search for the first record where 
- Parameters.ProductProfile is empty (not defined)
- Parameters.Segment = '0'
- Parameters.PreferredAlgorithmMethod = 'C'


If no record found then raise an exception.

Read and return parameters from found record.

## 🔗 Connections (1)

- ← Dependency: [[First Installment Due Date determination]]

## 📊 Appears In (2 diagrams)

- Custom: CEL Installment Schedule Dates determination
- Custom: First Installment Due Date for Application/Contract
