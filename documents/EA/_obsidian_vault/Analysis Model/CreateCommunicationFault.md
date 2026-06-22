---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Communication Management/v1.0/Communication"
domain: "Analysis Model"
element_id: 1833192
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 CreateCommunicationFault

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Customer Self-Care API/Application Interface Model/CLM OpenAPI/Communication Management/v1.0/Communication

## 📝 Notes

A response structure when an item of the request failed

## 🔗 Connections (3)

- → Dependency: [[CreateCommunicationFaultType]]
- → Dependency: [[ValidatedCommunicationType]]
- ← Dependency: [[communications (Class 1844131)]]

## 📊 Appears In (1 diagrams)

- Logical: Communications

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | CreateCommunicationFaultType |  |
| validatedCommunication | ValidatedCommunicationType |  |
