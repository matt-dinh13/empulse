---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality"
domain: "Requirements Model"
element_id: 1633342
diagrams: 2
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 RequestBase

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-8421 LOR - remove KZ custom behavior of BSL/LOR-8989 - Remove InitiateEvaluationRequest functionality

## 📝 Notes

Object representing a common base for requests of various services/methods.

## 🔗 Connections (6)

- ← Generalization «XSDextension»: [[UpdateApplicationRequest (Class 1820032)]]
- ← Generalization «XSDextension»: [[PrepareDocumentationRequest]]
- ← Generalization «XSDextension»: [[EvaluateApplicationRequest]]
- ← Generalization «XSDextension»: [[CreateAndEvaluateApplicationRequest (Class 1820020)]]
- ← Generalization «XSDextension»: [[SignApplicationRequest]]
- ← Generalization «XSDextension»: [[UpdateAndEvaluateApplicationRequest (Class 1820014)]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Logical: Common

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroomCode | string |  |
