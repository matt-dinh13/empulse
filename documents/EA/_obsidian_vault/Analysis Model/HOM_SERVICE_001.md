---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371183
diagrams: 2
connections: 15
tags:
  - class
  - analysis-model
---

# 🔷 HOM_SERVICE_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

This class is intended for the definition of services. It is a common ancestor for services

## 🔗 Connections (14)

- ← Generalization: [[HOM_PAYHOL_SERVICE_001]]
- ← Dependency: [[HOM_SERV_EXCLUSIV_RULE_001]]
- → Dependency: [[HOM_TARIFF_001]]
- ← Aggregation: [[HOM_PAYMT_DISCIPLN_PAR_001]]
- → Dependency: [[HOM_TERMS_AND_COND_001]]
- ← Generalization: [[HOM_CHDDR_SERVICE_001]]
- ← Dependency: [[HOM_SERV_EXCLUSIV_RULE_001]]
- ← Generalization: [[HOM_GIFT_PAYMENT_SRVC_001]]
- ← Aggregation: [[HOM_SERV2DOCUMENT_TYPE_001]]
- ← Generalization: [[HOM_INSURANCE_SERVICE_001]]
- ← Aggregation: [[HOM_LOAN_OPTIONS_SERVC_001]]
- ← Generalization: [[HOM_PAYMT_CARD_SERVICE_001]]
- ← Generalization: [[HOM_SMS_NTF_SER2NTF_TP_001]]
- → Dependency: [[HOM_SERVICE_TYPE_001]]

## 📊 Appears In (2 diagrams)

- Logical: Service (DWH Interface)
- Logical: Tariff (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| service type code | HOM_SERVICE_TYPE_001 |  |
| code | string |  |
| name | string |  |
| description | string |  |
| valid from | date |  |
| valid to | date |  |
| manual termination allowed | boolean |  |
| terms and conditions code | HOM_TERMS_AND_COND_001 |  |
| currency code | string |  |
| tariff code | HOM_TARIFF_001 |  |
