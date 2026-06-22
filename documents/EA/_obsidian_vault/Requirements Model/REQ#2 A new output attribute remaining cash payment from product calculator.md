---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5767 (BRPH-2797) Trade-In Amount as part of Down payment in BSL POC"
domain: "Requirements Model"
element_id: 1877740
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#2 A new output attribute remaining cash payment from product calculator

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5767 (BRPH-2797) Trade-In Amount as part of Down payment in BSL POC

## 📝 Notes

{ADD PCG-5767}
remaining cash payment = calculated cash payment – trade-in amount

if calculated downpayment < trade-in amount or remaining cash payment < 0 then offer calculation is stopped and continues to calculate the next offer
{/ADD}

## 🔗 Connections (5)

- ← Association: [[{MOD}Standard (STND)]]
- ← Dependency: [[{MOD}Structured Parameter Types]]
- ← Dependency: [[{MOD}OfferDto]]
- ← Association: [[{MOD}Subsidized Principal calculation]]
- ← Association: [[{MOD}Simple principal calculation]]

## 📊 Appears In (1 diagrams)

- Custom: PCG-5767 (BRPH-2797) Trade-In Amount as part of Down payment in BSL POC
