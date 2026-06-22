---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-393 (CBL-1855) Full early repayment services changes"
domain: "Requirements Model"
element_id: 1290876
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 Extend InstallmentServiceWS with method getExpectedGiftPaymentAmount

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-393 (CBL-1855) Full early repayment services changes

## 📝 Notes

In order to provide an expected gift payment amount for a calculation of ER amount during a FER with GIFT request creating, we need to extend InstallmentServiceWS with method getGiftPaymentAmount. It will call newly implemented {ADD}08.203 Calculate Expected Gift Payment Amount.

## 🔗 Connections (1)

- → Dependency: [[InstallmentServiceWS (Interface 1414296)]]

## 📊 Appears In (1 diagrams)

- Custom: IS-393 (CBL-1855) Full early repayment services changes
