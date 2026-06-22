---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822798
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Emboss Name Setting Allowed

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

// Returns True if setting of Emboss name is enabled
Input:
- Contract
- CardIssueMethod (Instant/Personalized) - optional, defined only in Fill in application 

If does not exist Contract.OfferFinancialParameters.OfferCardService then return False

If CardIssueMethod is not defined on input then CardIssueMethod = Contract.OfferFinancialParameters.OfferCardService.IssueMethod
SelectedCardService = Contract.OfferFinancialParameters.OfferCardService.Service.Standard Payment Card Service
If CardIssueMethod = INSTANT then CardType = SelectedCardService.InstantCardType
If CardIssueMethod = PERSONALIZED then CardType = SelectedCardService.PersonalizedCardType
If CardType.SystemGeneratedEmbossname = False then return True
Else return False.

## 🔗 Connections (2)

- ← Dependency: [[Generate Emboss name (GUIElement 1716422)]]
- ← Dependency: [[Emboss name - validation rules]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
