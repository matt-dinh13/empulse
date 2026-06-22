---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Presented Interest Rate"
domain: "Analysis Model"
element_id: 1824450
diagrams: 1
connections: 5
tags:
  - requirement
  - analysis-model
---

# 📋 List of Presented IR

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Manage Product Offer/User Interface Model/Presented Interest Rate

## 📝 Notes

Input:
- Contract
- ServiceRequest (optional)
- Target (Offer/Contract/Printout)

Output: 
- List of Presented IR (case, name, value, order)

Initialize List of Presented IR.

Source of PIR is defined as follows:
If input.ServiceRequest is defined then
- PIR = Loan Service Request Presented Interest Rate assigned to ServiceRequest
else
- PIR = FinancialParameter.Contract Presented Interest Rate assigned to Contract in status Signed and following statuses
- PIR = OfferFinancialParameter.Offer Presented Interest Rate assigned to Contract->Temporary_Application for other contract statuses

For each PIR do following steps:
- PIRS = PIR.Presented IR Setting
- If target = Offer and PIRS.DisplayInOffer = false then go to the next PIR
- If target = Contract and PIRS.DisplayInContract = false then go to the next PIR
- If target = Printout and PIRS.DisplayInPrintout = false then go to the next PIR
- Add record to the List of Presented IR:
-- case = PIRS.Case.Name
-- If target = Printout then name = PIRS.PrintName else name = PIRS.DisplayName
-- value = PIR.Value 
-- order =PIRS.Order

Order the List of Presented IR by case asc, order asc. Records for case = STANDARD are always on top.

## 🔗 Connections (5)

- ← Dependency: [[Presented interest rate in Grids]]
- ← Dependency: [[Presented interest rate in detail]]
- ← Dependency: [[Product Offer Detail Item Type]]
- → Dependency: [[{MOD}Presented IR Setting]]
- ← Dependency: [[PresentedInterestRateType (Class 1878232)]]

## 📊 Appears In (1 diagrams)

- Custom: Presented Interest Rate
