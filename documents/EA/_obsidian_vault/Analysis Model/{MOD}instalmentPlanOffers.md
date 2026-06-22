---
type: Class
stereotype: "interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Cabus AM REST/Get instalmentPlanOffersV3"
domain: "Analysis Model"
element_id: 1495049
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {MOD}instalmentPlanOffers

> **Type**: Class · **Stereotype**: «interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Cabus AM REST/Get instalmentPlanOffersV3

## 📝 Notes

REST API
{DEL CLM-2709}/openapi/accounts/{accountNumber}/transactions/instalmentPlanOffers
{/DEL}

{ADD CLM-2709}GET /openapi/v3/transaction/{accountNumber}/transactions/instalmentPlanOffers
{/ADD}

## 🔗 Connections (2)

- → Dependency: [[InstalmentPlanOffersRequest]]
- → Dependency: [[OpenApiListResponseDtoInstalmentPlanOfferDto]]

## 📊 Appears In (1 diagrams)

- Logical: Get instalmentPlanOffersV3
