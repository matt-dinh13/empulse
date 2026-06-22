---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1"
domain: "Analysis Model"
element_id: 1755727
diagrams: 1
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 ClientDataResponse

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1

## 🔗 Connections (8)

- → Usage: [[ResultCode (Enumeration 1755732)]]
- ← Generalization: [[CreateCustomerDataResponse]]
- ← Generalization: [[RemoveCustomerDataResponse]]
- ← Generalization: [[SearchCustomertDataResponse]]
- ← Generalization: [[UpdateCustomerDataResponse]]
- → Usage: [[FieldError]]
- ← Generalization: [[IdentificationCustomerDataResponse]]
- ← Generalization: [[GetCustomerDataResponse]]

## 📊 Appears In (1 diagrams)

- Logical: Customer Data - Responses

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | ResultCode |  |
| errorCode | string |  |
| errorMessage | string |  |
| requestId | string |  |
| validationErrors | FieldError |  |
