---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Direct debit (DD)/Kafka Messages/dd.direct-debit-mandate-data.v2"
domain: "Modules"
element_id: 1861247
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 KafkaDDMData

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Direct debit (DD)/Kafka Messages/dd.direct-debit-mandate-data.v2

## 🔗 Connections (1)

- → Dependency: [[DDMExtendedPropertyData]]

## 📊 Appears In (1 diagrams)

- Logical: Kafka Messages

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
| DDMExtendedProperty | DDMExtendedPropertyData |  |
| DDMType | string |  |
| contractCode | string |  |
