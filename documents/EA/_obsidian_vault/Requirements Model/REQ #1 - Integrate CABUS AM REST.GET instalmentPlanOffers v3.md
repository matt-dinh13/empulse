---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6286 (CLM-2709) Gift Payment Service for REL Products (POS on Card)"
domain: "Requirements Model"
element_id: 1495601
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Integrate CABUS AM REST.GET instalmentPlanOffers v3

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-6286 (CLM-2709) Gift Payment Service for REL Products (POS on Card)

## 📝 Notes

Goal of this task is to change the current functions covered by UC 12.630 Create request for CASH transaction without card and UC 12.632 Create request for POS transaction without card to use new CABUS REST API for getting Installment plan offer (/openapi/v3/transaction/{accountNumber}/transactions/instalmentPlanOffers).

Notification: GET instalmentPlanOffers v3 endpoint is used only when CLM Feature Flag useGetinstalmentPlanOffersV3=True, otherwise implemented GET instalmentPlanOffers v1 API endpoint is used.

## 📊 Appears In (1 diagrams)

- Custom: CBL-6286 (CLM-2709) Gift Payment Service for REL Products (POS on Card)
