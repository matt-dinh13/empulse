---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Communication Management/v1.0/Communication"
domain: "Analysis Model"
element_id: 1833187
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ValidatedCommunicationType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Communication Management/v1.0/Communication

## 📝 Notes

A result of validation which not passed

## 🔗 Connections (2)

- → Dependency: [[ValidationResultDto]]
- ← Dependency: [[CreateCommunicationFault]]

## 📊 Appears In (1 diagrams)

- Logical: Communications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| cuid | long |  |
| validationResult | ValidationResultDto |  |
