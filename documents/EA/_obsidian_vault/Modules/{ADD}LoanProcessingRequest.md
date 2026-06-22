---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR)/Interface Provided/Web Services"
domain: "Modules"
element_id: 1706096
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 {ADD}LoanProcessingRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Interface Provided/Web Services

## 📝 Notes

{ADD CSI-1950 /}
A a structure of loan processing request

## 🔗 Connections (3)

- → Usage: [[RequestSourceId]]
- ← Usage: [[{ADD}service-interpreter]]
- → Usage: [[RelatedSubject (Class 1706094)]]

## 📊 Appears In (1 diagrams)

- Logical: SIR - Process a request for a loan

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| relatedSubjects | RelatedSubject |  |
| sourceSystem | RequestSourceId |  |
| applicationCode | string |  |
