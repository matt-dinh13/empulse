---
type: Class
stereotype: "input"
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/REL Account Messages/Communication model"
domain: "Modules"
element_id: 1223746
diagrams: 2
connections: 4
tags:
  - class
  - modules
---

# 🔷 ACCRUEDINTEREST162

> **Type**: Class · **Stereotype**: «input»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/REL Account Messages/Communication model

## 📝 Notes

It is new message which reports accrued interest from IP plan. CaBus will send all future interests in advance to OBS. OBS will post the interest to the account at moment, when banking date will correspond to the billing date from the message.

## 🔗 Connections (3)

- ← Dependency «transformation»: [[AccruedInterestMessageDto]]
- → Dependency: [[ACCRUEDINTEREST162 CancelationReasonType]]
- → Dependency: [[CommResult]]

## 📊 Appears In (2 diagrams)

- Logical: REL Accured Interest - Communication model
- Logical: REL Accured Interest - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Id | number |  |
| Id_AccruedInterest | number |  |
| Id_credit | number |  |
| Billing_date | date |  |
| Amount | decimal |  |
| Type_inform | RecordTypeInform |  |
| Cancellation_reason | ACCRUEDINTEREST162 CancelationReasonType |  |
| IdResult190 | int |  |
| RestultCode | CommResult |  |
| TimeStamp | timestamp |  |
