---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management"
domain: "Analysis Model"
element_id: 1162929
diagrams: 1
connections: 9
tags:
  - class
  - analysis-model
---

# 🔷 HOM_PARTNER_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management

## 📝 Notes

Partner stands for a company, which has made an agreement with Home Credit and which will offer Home Credit's products to their clients. These partners can offer products in one or more salesrooms.

## 🔗 Connections (9)

- → Association: [[HOM_PARTNER_STAT_TRANS_001]]
- → Dependency: [[HOM_PARTNER_CATEGORY_001]]
- → Dependency: [[HOM_BUSINESS_AREA_001]]
- ← Aggregation: [[HOM_PARTNER2CONTACT_001]]
- ← Aggregation: [[HOM_PARTNER2ADDRESS_001]]
- ← Aggregation: [[HOM_PARTNER2PERSON_001]]
- ← Aggregation: [[HOM_PARTNER2BANK_ACC_001]]
- ← Aggregation: [[HOM_PARTNER_NOTICE_001]]
- ← Aggregation: [[HOM_PARTNER_DISB_CHNL_001]]

## 📊 Appears In (1 diagrams)

- Logical: Partner (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| partner type | string |  |
| name | string |  |
| status | string |  |
| business area code | HOM_BUSINESS_AREA_001 |  |
| district sales manager ID | number |  |
| contract sign date | date |  |
| activation date | date |  |
| end of activity date | date |  |
| group partner number | number |  |
| license number | string |  |
| payment status | string |  |
| security check flag | boolean |  |
| tax identification number | string |  |
| pan number | string |  |
| company registry number | string |  |
| partner category code | HOM_PARTNER_CATEGORY_001 |  |
| legal form code | string |  |
