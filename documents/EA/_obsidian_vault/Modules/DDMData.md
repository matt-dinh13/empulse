---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/CEL Account (CELA)/Interface Consumed/Kafka"
domain: "Modules"
element_id: 1808133
diagrams: 2
connections: 1
tags:
  - class
  - modules
---

# 🔷 DDMData

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/CEL Account (CELA)/Interface Consumed/Kafka

## 🔗 Connections (1)

- → InformationFlow «consumes»: [[{ADD}Process DDM change]]

## 📊 Appears In (2 diagrams)

- Logical: Kafka
- Logical: Kafka messages

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| DDMCode | string |  |
| ECSProviderCode | string |  |
| confirmationStatus | string |  |
| LimitAmount | int |  |
| FrequencyType | string |  |
| confirmationStatusRemarkValue | string |  |
| status | string |  |
| ValidFrom | date |  |
| validTo | date |  |
| confirmationStatusRemarkCode | string |  |
| DDProviderId | string |  |
| externalCode | string |  |
| RegularPaymentCode | string |  |
| RegularPaymentAmount | int |  |
| DDMType | string |  |
| DDMExtendedProperty | DDMExtendedPropertyData |  |
