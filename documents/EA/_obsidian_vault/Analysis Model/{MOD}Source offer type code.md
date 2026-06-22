---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model"
domain: "Analysis Model"
element_id: 1881277
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Source offer type code

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model

## 📝 Notes

Type (type code) of the source offer, that was used for the calculation of the application offer selected for the respective contract.

Visible only if not empty

LDM source:
Offer.offerTypeCode (if calling the respective service fails due to any reason, GEN_NotAvailable is displayed instead)

{ADD CLM-2846}
Visible if system parameter CLMshowSourceOfferTypeCodeOnContractDetail = TRUE
LDM source:
Offer.offerTypeCode or GEN_NotAvailable  - see UC01.210 Show contract detail for more info
{/ADD}
Localization code:
CON_SourceOfferTypeCode

## 📊 Appears In (1 diagrams)

- Custom: Contract detail - header
