---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface/Browse incoming payments"
domain: "Modules"
element_id: 1673238
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Search results 2

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface/Browse incoming payments

## 📝 Notes

Displayed only if search option (Contract, From Clients, Payment type, Custom) is chosen.
Default order by Transaction date is ascending, Transaction time is ascending, Amount is descending
Grid is page able.

Localization code: GEN_SearchResults

## 🔗 Connections (2)

- → Dependency: [[05.050 Show incoming payment detail (UseCase 1877229)]]
- → Dependency: [[05.030 Couple incoming payment manually (UseCase 1875785)]]

## 📊 Appears In (1 diagrams)

- Custom: Browse incoming payments - UI

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Transaction date | date |  |
| Amount | number |  |
| Provided contract number | text |  |
| Paired contract number | number |  |
| Payment type | text |  |
| Payment channel | text |  |
| Status | text |  |
| Detail | Button |  |
| Pair payment | Button |  |
