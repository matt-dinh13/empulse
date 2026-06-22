---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/DDS"
domain: "Analysis Model"
element_id: 1219280
diagrams: 2
connections: 4
tags:
  - class
  - analysis-model
---

# 🔷 DDSRequestProcessingResultDto

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/DDS

## 🔗 Connections (4)

- ← Dependency: [[DDSRequestDataProcessingResultDto]]
- → Dependency: [[DDSRequestProcessingResultTypeDto]]
- → Dependency: [[DDSRequestProcessingResultItemDto]]
- ← Dependency: [[DDSRequestProcessingResultMessage]]

## 📊 Appears In (2 diagrams)

- Logical:  DDS request processing result
- Logical: DDS Requests - file structure

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| result | DDSRequestProcessingResultTypeDto |  |
| requestId | string |  |
| requestSourceSystem | string |  |
| items | DDSRequestProcessingResultItemDto |  |
