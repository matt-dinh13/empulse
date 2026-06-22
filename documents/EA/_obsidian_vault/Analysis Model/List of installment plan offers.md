---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model"
domain: "Analysis Model"
element_id: 1776514
diagrams: 3
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 List of installment plan offers

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Cardless transactions support/User Interface Model

## 📝 Notes

A data grid for showing the list of installment plan offers
Source: {DEL CSI-2848}items from OpenApiListResponseDtoInstalmentPlanOfferDto{/DEL}{ADD CSI-2848}see getting InstallmentPlanOffers[] in the UC 12.630 Create request for CASH transaction without card{/ADD}

## 📊 Appears In (3 diagrams)

- Custom: Cardless cash transaction request - User Interface
- Custom: Cardless POS transaction request - User Interface
- Custom: CBL-6286 (CLM-2709) Gift Payment Service for REL Products (POS on Card)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Annuity | Money |  |
| Tenor | Number |  |
| Number of gift payments | Number |  |
| Annual interest rate | Percentage |  |
| IP variant description | Text |  |
| Choose offer | radiobutton |  |
