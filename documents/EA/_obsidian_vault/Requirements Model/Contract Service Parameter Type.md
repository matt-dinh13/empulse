---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1902 (CLM-969) Enforce gift payment without fulfilled eligibility criteria"
domain: "Requirements Model"
element_id: 1868562
diagrams: 6
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 Contract Service Parameter Type

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-1902 (CLM-969) Enforce gift payment without fulfilled eligibility criteria

## 📝 Notes

List of loan service parameter types and their data types

## 🔗 Connections (4)

- ← Dependency: [[Contract Service Parameter]]
- → Dependency: [[Reward payment method type]]
- ← Dependency: [[Service Type Parameter Definition]]
- ← Dependency: [[Offer Service Parameter]]

## 📊 Appears In (6 diagrams)

- Custom: CBL-1902 (CLM-969) Enforce gift payment without fulfilled eligibility criteria
- Custom: CBL-9520 (CLM-2918) New requirements by Payment Holidays
- Logical: Contract - Services
- Logical: Contract Service
- Logical: Offer Service
- Logical: Service Processing Setting

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CHECKTL_DATE | date |  |
| COP_ACCEPT_SU | boolean |  |
| COP_DUE_DATE | date |  |
| COP_DUE_DATE_MAX | date |  |
| END_OF_GRACE_PERIOD | date |  |
| END_OF_GRPER_MORATORIUM | date |  |
| GIFT_PAYMENT_DATE | date |  |
| CELREW_REQUEST | string |  |
| CELREW_METHOD | Reward payment method type |  |
| AUTOMATIC_FER_PROCESSING | boolean |  |
| GIFT_ENFORCE_FLAG | boolean |  |
| GIFT_ENFORCE_UPDATED_BY | int |  |
| GIFT_ENFORCE_UPDATE_DATE | int |  |
| PAYHOL_MIN_DATE | date |  |
| FER_USE_PAY_DEPOSIT_DATE | boolean |  |
| COP_CANCEL_INSURANCE | boolean |  |
| {ADD}TOPUP_OVERLAP_PERIOD | int |  |
| {ADD}TOPUP_OVERLAP_PERIOD_END_DATE | date |  |
