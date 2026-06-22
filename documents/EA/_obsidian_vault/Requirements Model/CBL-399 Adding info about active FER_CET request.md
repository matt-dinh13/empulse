---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-209 (CBL-399) Adding info about active FER/CET request"
domain: "Requirements Model"
element_id: 1290925
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-399 Adding info about active FER/CET request

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-209 (CBL-399) Adding info about active FER/CET request

## 📝 Notes

Decription:
Business goal is to add ability to represent in KZ local application document information about client‘s active CET/FER requests with prepayment sums.
We need these information to represent in local application, then client will have info how much money he has overpaid.
The form change in KZ local application is from legal point of view, that client should be able to get necessary financial information which can be proposed to third parties (finacial institutions, government,...).

A4:
Phase 2 - Change algorithm of debt calculation in OnlineDebtCalculationWS

Also we need changes to be done in OnlineDebtCalculationWS, method CalculateDebt, or add additional input parameter to launch method with it.
For example, if we ask info with parameter ‘PREP’=1, system should calculate debt, but all prepayments (payments which were paid before due_date of installment) should reduce sum of client’s debt only in case client has active FER/CET requests and sum of prepayments is more or equal sum of FER/CET request.

Result after clarifications:

	
- A new parameter ignorePrepaymentsOnInactiveCETFER will be added to the web service request – if not specified, default value of the parameter is false


	
- If ignorePrepaymentsOnInactiveCETFER = true and there is no active CET/FER request for the given contract, all prepayments will be ignored during debt calculations

## 🔗 Connections (2)

- ← Generalization: [[REQ#2 Modify business logic of OnlineDebtWS.CalculateDebt() method]]
- ← Generalization: [[REQ#1 Add ignorePrepaymentsOnInactiveCETFER parameter to OnlineDebtWS.CalculateDebt() request]]

## 📊 Appears In (1 diagrams)

- Custom: IS-209 (CBL-399) Adding info about active FER/CET request
