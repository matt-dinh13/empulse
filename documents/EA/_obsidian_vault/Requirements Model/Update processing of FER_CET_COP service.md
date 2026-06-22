---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-443 (CBL-1940) COP_CET_services_changes"
domain: "Requirements Model"
element_id: 1290894
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 Update processing of FER/CET/COP service

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-443 (CBL-1940) COP_CET_services_changes

## 📝 Notes

Currently FER/CET/COP service is processed immediately after receiving of payment (if service parameter "Enable processing on balance change" is set), but contract is finished by job only day after due date of the last installment (UC01.700 Choose contracts suitable to finishing).

If service is successfully processed, check parameter „Finish contract after processing“ of the service, if it is set, finish contract immediately.

## 🔗 Connections (5)

- → Generalization: [[Finish contract immediately after CET_COP_FER request processing if agreed]]
- ← Realisation: [[{MOD}08.280 Check and process CET request]]
- ← Realisation: [[{ADD}08.254 Check and process Cooling-off period]]
- ← Realisation: [[{MOD}08.252 Process cooling-off period]]
- ← Realisation: [[03.100 Check and process Early repayment request (UseCase 1879631)]]

## 📊 Appears In (1 diagrams)

- Custom: IS-443 (CBL-1940) COP_CET_services_changes
