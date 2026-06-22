---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules"
domain: "Analysis Model"
element_id: 1728257
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 Max Loan Amount

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Business Rules

## 📝 Notes

If maximum loan amount is set for the insurance service, the loan amount of the offer must be lower or equal to the maximal value. Loan amount is taken from related Offer_Financial_Parameters.Net_Credit_Amount where Offer_Financial_Parameters.Chosen = 'true'.

Related insurance eligibility settings:
Insurance Service.Max Loan Amount

## 📊 Appears In (1 diagrams)

- Custom: Business Rules
