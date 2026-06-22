---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/LOR"
domain: "Feature Guide"
element_id: 1433080
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Application

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/LOR

## 📝 Notes

Application is the key entity in loan origination process. It stores data obtain from client during application form filling and provides information of application status.

## Data structure
- Temporary application
- Contract
- Offer financial parameters (see related business entity **Offer**)
- Client snapshot (see related business entity **Client**)
- Payment channels (e.g. disbursement or repayment)

## Detail
Data from application form are stored in **Temporary Application**. Afterwards these are transformed into application (currently represented as Contract entity).

## 📊 Appears In (1 diagrams)

- Package: LOR
