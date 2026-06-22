---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules"
domain: "Modules"
element_id: 1881756
diagrams: 3
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {ADD}External validation confirmation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules

## 📝 Notes

{ADD PCG-5673/}
Input:
- commodit id
Output:
- validation confirmation result
- error message

Steps:
System calls external system with request for validation confirmation based on commodity.manufacturer
- if commodity.manufacturer = PHILIPS then PHILIPS loan status update  with status = approved and again with status = disbursed


Note: for calling external systems the apache proxy external-services is used (https://external-services.in.infra/)
uat config: https://git.homecredit.net/deploy/proxies/configuration/-/blob/master/conf/in/uat/external-services.in.infra.yaml
prod config: https://git.homecredit.net/deploy/proxies/configuration/-/blob/master/conf/in/prod/external-services.pdcin1.in.prod.yaml

## 🔗 Connections (4)

- ← Dependency: [[{MOD}Process transaction activation]]
- ← Dependency: [[{MOD}Process contract supplement creation notification]]
- ← Dependency: [[{MOD}Process contract signature]]
- → Dependency: [[{ADD}PHILIPS loan status update]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: PCG-5673 BRIN-1204 - Philips (Zenotel India) - API Integration
- Use Case: Commodity activation
