---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules"
domain: "Modules"
element_id: 1881759
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 {ADD}PHILIPS loan status update

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules

## 📝 Notes

{ADD PCG-5673/}
For country: IN
External call to PHILIPS (ZenotelIndia)

Input:
- status

System calls external system for validation cancellation with data from commodity.
endpoint: POST https://zenotelindia.replit.app/api/nbfc/loan-status-update
Authentication:
Header - X-API-Key: nbfc_bajaj_b1c72afa86af1703a34f3b6613016883
Request body parameters:
- applicationNumber = Commodity.ApplicationNumber
- status = status (from input)

note: documentation for Philips (Zenotel) integration assigned in BRIN-1204
https://zenotelindia.replit.app/api/nbfc/docs/homecredit

## 🔗 Connections (2)

- ← Dependency: [[{MOD}External validation cancellation]]
- ← Dependency: [[{ADD}External validation confirmation]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: PCG-5673 BRIN-1204 - Philips (Zenotel India) - API Integration
