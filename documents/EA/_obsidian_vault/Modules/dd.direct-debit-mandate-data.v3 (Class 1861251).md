---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Direct debit (DD)/Kafka Messages/dd.direct-debit-mandate-data.v3"
domain: "Modules"
element_id: 1861251
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 dd.direct-debit-mandate-data.v3

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Direct debit (DD)/Kafka Messages/dd.direct-debit-mandate-data.v3

## 🔗 Connections (5)

- → Association: [[AccountTypeDto (Enumeration 1819610)]]
- → Association: [[FrequencyTypeDto (Enumeration 1819613)]]
- → Association: [[DDMStatusTypeDto (Enumeration 1819616)]]
- → Association: [[DDMConfirmStatusTypeDto (Enumeration 1819618)]]
- ← Aggregation: [[DdmExtendedProperties]]

## 📊 Appears In (1 diagrams)

- Logical: dd.direct-debit-mandate-data.v3

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| bankCode | string |  |
| {ADD}bankName | string |  |
| bankSynchronizationCode | string |  |
| bankBranchCode | string |  |
| bankBranchSynchronizationCode | string |  |
| disctrict | string |  |
| micr | string |  |
| region | string |  |
| accountHolderName | string |  |
| accountType | string |  |
| accountNumber | string |  |
| code | string |  |
| contractCode | string |  |
| confirmationStatus | string |  |
| confirmationStatusRemarkValue | string |  |
| ecsProvider | string |  |
| frequency | string |  |
| limit | long |  |
| limitCurrency | string |  |
| status | string |  |
| type | string |  |
| validFrom | dateTime |  |
| validTo | dateTime |  |
| regularPaymentCode | string |  |
| extendedProperties | DdmExtendedProperties |  |
| regularPaymentAmount | long |  |
