---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/SQS API/Business Rules"
domain: "Modules"
element_id: 1879030
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Get sales quote data

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/SQS API/Business Rules

## 📝 Notes

Sales quote data are retrieved from SQS (Sales Quote Storage) via REST API call with GET request /api/salesQuotes/{id}
with parameters
- id = IP_OFFER_CODE_USED

Swagger documentation: https://sqs.in00a1.cz.infra/swagger-ui/index.html#

## 🔗 Connections (1)

- ← Dependency: [[Process transaction cancelation notification]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Commodity cancelation
