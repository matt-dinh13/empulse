---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management"
domain: "Analysis Model"
element_id: 1162931
diagrams: 1
connections: 13
tags:
  - class
  - analysis-model
---

# 🔷 HOM_SALESROOM_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Sales Network Management

## 📝 Notes

Salesroom (or POS - Point of sale) is a place where are offered Home Credit's products.

## 🔗 Connections (13)

- → Dependency: [[HOM_SALRM_BUSINESS_MDL_001]]
- ← Aggregation: [[HOM_SALRM_DISB_CHAN_001]]
- ← Association: [[HOM_SALRM_STATUS_TRANS_001]]
- ← Aggregation: [[HOM_SALESROOM_NOTICE_001]]
- ← Aggregation: [[HOM_SALRM2COMMOD_TYPE_001]]
- ← Aggregation: [[HOM_SALRM2BANK_ACCOUNT_001]]
- → Dependency: [[HOM_SALESROOM_CATEGORY_001]]
- ← Aggregation: [[HOM_SALESMAN_001]]
- ← Aggregation: [[HOM_SALESROOM2PERSON_001]]
- ← Aggregation: [[HOM_SALESROOM2ADDRESS_001]]
- ← Aggregation: [[HOM_SALESROOM2CONTACT_001]]
- ← Aggregation: [[HOM_SALESROOM2PRODUCT_001]]
- ← Aggregation: [[HOM_SALRM2USER_DETAIL_001]]

## 📊 Appears In (1 diagrams)

- Logical: Salesroom (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| status | string |  |
| code | string |  |
| partner ID | number |  |
| business area code | string |  |
| name | string |  |
| administration point code | string |  |
| district sales manager ID | number |  |
| branch license number | string |  |
| contract sign date | date |  |
| checking date | date |  |
| features type | string |  |
| group salesroom number | number |  |
| moment of payment type | string |  |
| motivation program date | date |  |
| online connection flag | boolean |  |
| planned opening date | date |  |
| activation date | date |  |
| end of activity date | date |  |
| payment status | string |  |
| shop size | number |  |
| pan number | string |  |
| tax identification number | string |  |
| contract processing type | string |  |
| two blocks filling type | string |  |
| company registry number | string |  |
| web camera flag | boolean |  |
| business model code | HOM_SALRM_BUSINESS_MDL_001 |  |
| manual disbursement allowed | boolean |  |
| sales area code | string |  |
| card pickup | boolean |  |
| category code | HOM_SALESROOM_CATEGORY_001 |  |
