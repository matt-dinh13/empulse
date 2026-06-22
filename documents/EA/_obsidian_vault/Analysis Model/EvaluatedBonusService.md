---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA"
domain: "Analysis Model"
element_id: 1607557
diagrams: 2
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 EvaluatedBonusService

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA

## 📝 Notes

A bonus service which is evaluated and possibly applied when the loan service is asked

## 🔗 Connections (2)

- ← Dependency: [[LoanServiceRequestDocument]]
- → Dependency: [[BonusServiceAttribute]]

## 📊 Appears In (2 diagrams)

- Logical: HO_SERVICE_REQUEST_DATA - FER printout usage
- Logical: HO_SERVICE_REQUEST_DATA - PER printout usage

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| serviceCode | string |  |
| serviceName | string |  |
| serviceAttributes | BonusServiceAttribute |  |
| appliedOnRequestYN | boolean |  |
