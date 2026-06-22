---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/DDS"
domain: "Analysis Model"
element_id: 1863172
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 DDS export

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/DDS

## 📝 Notes

EXCHANGE_NAME = "bsl.installments.headers.dds.exchange";
OPERATION_TYPE_KEY = "operationType";
DDS_EXPORT = "ddsExport"

## 🔗 Connections (3)

- → Dependency: [[ddmAttributeTypeDto]]
- → Dependency: [[ddmJfsPartnerDto]]
- ← Dependency: [[05.262 DDS process]]

## 📊 Appears In (1 diagrams)

- Logical: DDS export

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| directDebitChannelId | string |  |
| clientBankAccountNumber | string |  |
| ClientBankBranchPrimaryCode | string |  |
| clientBankBranchSecondaryCode | string |  |
| clientBankAccountName | string |  |
| ClientBankAccountType | string |  |
| ddmReference | string |  |
| contractReference | string |  |
| externalReference | string |  |
| dueDate | date |  |
| amount | number |  |
| jfsPartners | ddmJfsPartnerDto |  |
| ddmAttributes | ddmAttributeTypeDto |  |
| ddsExternalUUID | string |  |
