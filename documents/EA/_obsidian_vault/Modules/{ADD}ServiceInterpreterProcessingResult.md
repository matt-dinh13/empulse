---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Interface Provided/Generated Messages/ServiceInterpreterProcessingResult notification"
domain: "Modules"
element_id: 1706098
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 {ADD}ServiceInterpreterProcessingResult

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Interface Provided/Generated Messages/ServiceInterpreterProcessingResult notification

## 📝 Notes

{ADD CSI-1950 /}
SIR notification message structure

## 🔗 Connections (1)

- → Usage: [[RequestSourceId]]

## 📊 Appears In (1 diagrams)

- Logical: ServiceInterpreterProcessingResult notification

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | string |  |
| errorCode | string |  |
| errorDescription | string |  |
| eventDateTime | dateTime |  |
| sourceSystem | RequestSourceId |  |
| applicationCode | string |  |
