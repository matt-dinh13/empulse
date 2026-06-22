---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3261 (CLM-1298) Available EMI Card offer displayed in Client detail"
domain: "Requirements Model"
element_id: 1330507
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Show Loan offer amount in the Account detail for IN

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3261 (CLM-1298) Available EMI Card offer displayed in Client detail

## 📝 Notes

Especially for IN, there will be showed a new field - Loan offer amount - in the Account detail screen. This value will be provided by AM component in the current REST GET /openapi/v2/account/{accountNumber}/balance call so we will replace the getting "balance" attributes from AccountManagementWS to the mentioned REST service.

## 📊 Appears In (1 diagrams)

- Custom: CBL-3261 (CLM-1298) Available EMI Card offer displayed in Client detail
