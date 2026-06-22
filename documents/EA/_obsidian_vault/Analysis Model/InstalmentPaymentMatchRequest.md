---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI"
domain: "Analysis Model"
element_id: 824510
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 InstalmentPaymentMatchRequest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Account/Account UI

## 📝 Notes

Instalment and payments search. Returns active (cancelled = false) items only.

## 🔗 Connections (1)

- ← Dependency: [[AccountUIWS]]

## 📊 Appears In (2 diagrams)

- Logical: Account UI - Interface diagram
- Logical: Account UI - Interface diagram - Installment schedule

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| accountNumber | AccountNumberType |  |
| instalmentPrescribedDateRange | DateRangeDto |  |
| paymentBillingDateRange | DateRangeDto |  |
