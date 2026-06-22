---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Remotely filling/Business rules"
domain: "Analysis Model"
element_id: 1716869
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Remotely created application to process

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Remotely filling/Business rules

## 📝 Notes

Check if the remotely created application is available to complete on the current salesroom. 

Input:

	
- application



1. If product is selected on the application and substatus is <> POG or ROG, the product of the application must be available for the salesroom the user is currently logged on (valid assignment).
2.  If product is selected on the application and initial transaction type<>NDF, disbursement channel type saved on the application must be available for current salesroom - Get allowed disbursement channels on POS for Transaction type with product type and product transaction type get from the product on the application.
3. If the application is in substatus POG or ROG or DRAFT (Temporary_Application.Saved = true and Temporary_Application.Contract_ID = NULL), at least one of alternative offers (i.e. Offer_Financial_Parameters.Type = 'A') or current offer (i.e. Offer_Financial_Parameters.Chosen = TRUE) must have a product that is available for the salesroom the user is currently logged on (valid assignment).
4. If GlobalParameter.UseSalesArea = 'TRUE', then Contract.Sales Area must be one of the sales areas that user has assigned (this list is provided by UMC in 00.050 Login system).

Note:Application = Temporary application and contract

## 🔗 Connections (2)

- → Dependency: [[Get allowed disbursement channels on POS for Transaction type]]
- ← Dependency: [[Display remotely created applications]]

## 📊 Appears In (1 diagrams)

- Custom: Business rules
