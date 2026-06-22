---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface/Browse incoming payments"
domain: "Modules"
element_id: 1673236
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Search results 1

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Management of incoming payments/User Interface/Browse incoming payments

## 📝 Notes

Displayed only if search option Standard is chosen.

Default order by Transaction date is ascending, Transaction time is ascending, Amount is descending
Grid is page able.

Localization code: GEN_SearchResults

## 🔗 Connections (2)

- → Dependency: [[05.030 Couple incoming payment manually (UseCase 1875785)]]
- → Dependency: [[05.050 Show incoming payment detail (UseCase 1877229)]]

## 📊 Appears In (1 diagrams)

- Custom: Browse incoming payments - UI

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Amount | number |  |
| Detail | Button |  |
| Pair payment | Button |  |
| Paired contract number | number |  |
| Pairing status | text |  |
| Payer’s name | text |  |
| Payment channel | text |  |
| Provided contract number | text |  |
| Status | text |  |
| Transaction date | date |  |
