---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Header - product AF"
domain: "Analysis Model"
element_id: 1720784
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Joint lending partner

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Header - product AF

## 📝 Notes

Joint lending partner's name.

Hidden if empty.

LDM source:
Joint lender name (Joint Lender.Name) determined based on the corresponding code (retrieved in the superior use case) from:
- GetCustomerMarketingOfferResponse.offer.data.jointLendingPartner
   or
- Offer.jointLendingPartnerCode
If calling the service fails due to any reason, GEN_NotAvailable is displayed instead.

Localization code:
MO_JointLendingPartner

## 📊 Appears In (1 diagrams)

- Custom: Header - product AF
